import os
import asyncio
from playwright.async_api import async_playwright
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse
import re
from pathlib import Path
import aiohttp
import aiofiles

class WebsiteFetcher:
    def __init__(self, base_url):
        self.base_url = base_url
        self.domain = urlparse(base_url).netloc
        self.downloaded_urls = set()
        self.output_dir = Path('website_content')
        self.output_dir.mkdir(exist_ok=True)
        
    def is_same_domain(self, url):
        """Check if URL belongs to the same domain"""
        parsed = urlparse(url)
        return parsed.netloc == self.domain or parsed.netloc == ''
    
    def should_download(self, url):
        """Determine if we should download this URL"""
        parsed = urlparse(url)
        # Download same domain resources
        if parsed.netloc == self.domain or parsed.netloc == '':
            return True
        # Also download common CDN resources
        common_cdns = ['cdn', 'static', 'assets', 'jsdelivr', 'unpkg', 'cdnjs', 'googleapis', 'cloudflare']
        if any(cdn in parsed.netloc.lower() for cdn in common_cdns):
            return True
        return False
    
    def get_absolute_url(self, url):
        """Convert relative URL to absolute"""
        return urljoin(self.base_url, url)
    
    def sanitize_filename(self, url):
        """Create a safe filename from URL"""
        parsed = urlparse(url)
        path = parsed.path.strip('/')
        if not path or path == '/':
            return 'index.html'
        
        # Remove query parameters and fragments
        filename = path.split('?')[0].split('#')[0]
        
        # Replace slashes with underscores
        filename = filename.replace('/', '_')
        
        # Ensure it has an extension
        if '.' not in filename:
            # Try to determine extension from content type or URL
            filename += '.html'
        
        return filename
    
    async def download_file(self, session, url, filepath):
        """Download a file from URL"""
        if url in self.downloaded_urls:
            return True
        
        try:
            async with session.get(url, timeout=aiohttp.ClientTimeout(total=30)) as response:
                if response.status == 200:
                    # Create directory if needed
                    filepath.parent.mkdir(parents=True, exist_ok=True)
                    
                    # Write file
                    content = await response.read()
                    async with aiofiles.open(filepath, 'wb') as f:
                        await f.write(content)
                    
                    self.downloaded_urls.add(url)
                    print(f"[OK] Downloaded: {url} -> {filepath}")
                    return True
                else:
                    print(f"[WARNING] Got status {response.status} for {url}")
                    return False
        except Exception as e:
            print(f"[ERROR] Failed to download {url}: {e}")
            return False
    
    def extract_resources(self, soup, html_content):
        """Extract all CSS, JS, and image URLs from HTML"""
        resources = {
            'css': [],
            'js': [],
            'images': []
        }
        
        # Extract CSS files
        for link in soup.find_all('link', rel='stylesheet'):
            href = link.get('href')
            if href:
                resources['css'].append(self.get_absolute_url(href))
        
        # Extract inline styles and style tags
        for style in soup.find_all('style'):
            css_content = style.string or ''
            imports = re.findall(r'@import\s+(?:url\()?["\']?([^"\']+)["\']?', css_content)
            for imp in imports:
                resources['css'].append(self.get_absolute_url(imp))
        
        # Extract JS files
        for script in soup.find_all('script', src=True):
            src = script.get('src')
            if src:
                resources['js'].append(self.get_absolute_url(src))
        
        # Extract images
        for img in soup.find_all('img', src=True):
            src = img.get('src')
            if src:
                resources['images'].append(self.get_absolute_url(src))
        
        # Also check data-src, data-lazy-src, etc. (lazy loading)
        for img in soup.find_all('img'):
            for attr in ['data-src', 'data-lazy-src', 'data-original', 'data-srcset']:
                src = img.get(attr)
                if src:
                    if ',' in src:
                        src = src.split(',')[0].strip().split()[0]
                    resources['images'].append(self.get_absolute_url(src))
        
        # Extract background images from inline styles
        for element in soup.find_all(style=True):
            style_attr = element.get('style', '')
            bg_images = re.findall(r'url\(["\']?([^"\']+)["\']?\)', style_attr)
            for bg_img in bg_images:
                resources['images'].append(self.get_absolute_url(bg_img))
        
        # Extract from CSS background-image properties
        for style_tag in soup.find_all('style'):
            css_content = style_tag.string or ''
            bg_images = re.findall(r'background-image:\s*url\(["\']?([^"\']+)["\']?\)', css_content, re.IGNORECASE)
            for bg_img in bg_images:
                resources['images'].append(self.get_absolute_url(bg_img))
        
        # Extract images from CSS content
        css_urls = re.findall(r'url\(["\']?([^"\']+)["\']?\)', html_content)
        for css_url in css_urls:
            if any(ext in css_url.lower() for ext in ['.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp', '.ico']):
                resources['images'].append(self.get_absolute_url(css_url))
        
        return resources
    
    async def download_css_resources(self, session, css_content, css_url):
        """Extract and download resources referenced in CSS"""
        # Better regex to handle URLs with query strings and fragments
        urls = re.findall(r'url\(["\']?([^"\'()]+)["\']?\)', css_content)
        for url in urls:
            # Clean up the URL (remove query strings and fragments for matching)
            clean_url = url.split('?')[0].split('#')[0]
            abs_url = self.get_absolute_url(url)
            if self.should_download(abs_url):
                if any(ext in clean_url.lower() for ext in ['.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp', '.ico']):
                    filepath = self.output_dir / 'images' / self.sanitize_filename(abs_url)
                    await self.download_file(session, abs_url, filepath)
                elif any(ext in clean_url.lower() for ext in ['.woff', '.woff2', '.ttf', '.eot', '.otf']):
                    filepath = self.output_dir / 'fonts' / self.sanitize_filename(abs_url)
                    await self.download_file(session, abs_url, filepath)
    
    async def fetch_all(self):
        """Main method to fetch all website content"""
        print(f"Starting to fetch content from {self.base_url}...\n")
        
        async with async_playwright() as p:
            # Launch browser
            browser = await p.chromium.launch(headless=True)
            context = await browser.new_context(
                user_agent='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
            )
            page = await context.new_page()
            
            # Navigate to page and wait for it to load
            print("Loading page with browser...")
            await page.goto(self.base_url, wait_until='networkidle', timeout=60000)
            
            # Wait a bit for any lazy-loaded content
            await page.wait_for_timeout(3000)
            
            # Get page content
            html_content = await page.content()
            
            # Save main HTML
            main_html_path = self.output_dir / 'index.html'
            async with aiofiles.open(main_html_path, 'wb') as f:
                await f.write(html_content.encode('utf-8'))
            print(f"[OK] Saved main HTML: {main_html_path}\n")
            
            # Parse HTML
            soup = BeautifulSoup(html_content, 'html.parser')
            
            # Extract resources
            resources = self.extract_resources(soup, html_content)
            
            print(f"Found {len(resources['css'])} CSS files, {len(resources['js'])} JS files, {len(resources['images'])} images")
            
            # Close browser
            await browser.close()
        
        # Download all resources using aiohttp
        async with aiohttp.ClientSession() as session:
            print("\nDownloading CSS files...")
            css_tasks = []
            for css_url in resources['css']:
                if self.should_download(css_url):
                    filepath = self.output_dir / 'css' / self.sanitize_filename(css_url)
                    task = self.download_file(session, css_url, filepath)
                    css_tasks.append((task, css_url))
            
            # Download CSS files and extract their resources
            for task, css_url in css_tasks:
                success = await task
                if success:
                    # Fetch CSS content to extract resources
                    try:
                        async with session.get(css_url) as resp:
                            if resp.status == 200:
                                css_content = await resp.text()
                                await self.download_css_resources(session, css_content, css_url)
                    except Exception as e:
                        print(f"[WARNING] Could not extract CSS resources from {css_url}: {e}")
            
            print("\nDownloading JS files...")
            js_tasks = []
            for js_url in resources['js']:
                if self.should_download(js_url):
                    filepath = self.output_dir / 'js' / self.sanitize_filename(js_url)
                    js_tasks.append(self.download_file(session, js_url, filepath))
            
            await asyncio.gather(*js_tasks, return_exceptions=True)
            
            print("\nDownloading images...")
            img_tasks = []
            for img_url in resources['images']:
                if self.should_download(img_url):
                    filepath = self.output_dir / 'images' / self.sanitize_filename(img_url)
                    img_tasks.append(self.download_file(session, img_url, filepath))
            
            await asyncio.gather(*img_tasks, return_exceptions=True)
        
        print(f"\n[OK] Completed! All files saved to: {self.output_dir.absolute()}")
        print(f"Total files downloaded: {len(self.downloaded_urls)}")

if __name__ == '__main__':
    url = 'https://www.weddingnama.in/'
    fetcher = WebsiteFetcher(url)
    asyncio.run(fetcher.fetch_all())

