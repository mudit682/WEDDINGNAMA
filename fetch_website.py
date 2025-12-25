import os
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse
import re
from pathlib import Path

class WebsiteFetcher:
    def __init__(self, base_url):
        self.base_url = base_url
        self.domain = urlparse(base_url).netloc
        self.session = requests.Session()
        self.session.headers.update({
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
            'Accept-Language': 'en-US,en;q=0.9',
            'Accept-Encoding': 'gzip, deflate, br',
            'Connection': 'keep-alive',
            'Upgrade-Insecure-Requests': '1',
            'Sec-Fetch-Dest': 'document',
            'Sec-Fetch-Mode': 'navigate',
            'Sec-Fetch-Site': 'none',
            'Cache-Control': 'max-age=0'
        })
        self.downloaded_urls = set()
        self.output_dir = Path('website_content')
        self.output_dir.mkdir(exist_ok=True)
        
    def is_same_domain(self, url):
        """Check if URL belongs to the same domain"""
        parsed = urlparse(url)
        return parsed.netloc == self.domain or parsed.netloc == ''
    
    def should_download(self, url):
        """Determine if we should download this URL (same domain or external CDN)"""
        parsed = urlparse(url)
        # Download same domain resources
        if parsed.netloc == self.domain or parsed.netloc == '':
            return True
        # Also download common CDN resources
        common_cdns = ['cdn', 'static', 'assets', 'jsdelivr', 'unpkg', 'cdnjs', 'googleapis']
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
            filename += '.html'
        
        return filename
    
    def download_file(self, url, filepath):
        """Download a file from URL"""
        if url in self.downloaded_urls:
            return True
        
        try:
            response = self.session.get(url, timeout=30, allow_redirects=True)
            # Don't raise for status, try to save anyway
            if response.status_code not in [200, 201]:
                print(f"[WARNING] Got status {response.status_code} for {url}, but trying to save...")
            
            # Create directory if needed
            filepath.parent.mkdir(parents=True, exist_ok=True)
            
            # Write file
            with open(filepath, 'wb') as f:
                f.write(response.content)
            
            self.downloaded_urls.add(url)
            print(f"[OK] Downloaded: {url} -> {filepath}")
            return True
        except Exception as e:
            print(f"[ERROR] Failed to download {url}: {e}")
            return False
    
    def fetch_page(self, url):
        """Fetch and parse a webpage"""
        try:
            response = self.session.get(url, timeout=30, verify=True, allow_redirects=True)
            # Try to decode text, but fall back to content if encoding fails
            try:
                text = response.text
            except:
                text = response.content.decode('utf-8', errors='ignore')
            
            # Don't raise for status, just return what we got
            if response.status_code == 200:
                return text, response.content
            else:
                print(f"[WARNING] Got status {response.status_code} for {url}, but continuing...")
                return text, response.content
        except Exception as e:
            print(f"[ERROR] Failed to fetch {url}: {e}")
            return None, None
    
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
            # Extract @import URLs from CSS
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
                    # Handle srcset format
                    if ',' in src:
                        src = src.split(',')[0].strip().split()[0]
                    resources['images'].append(self.get_absolute_url(src))
        
        # Extract background images from inline styles
        for element in soup.find_all(style=True):
            style_attr = element.get('style', '')
            bg_images = re.findall(r'url\(["\']?([^"\']+)["\']?\)', style_attr)
            for bg_img in bg_images:
                resources['images'].append(self.get_absolute_url(bg_img))
        
        # Extract from CSS background-image properties in style tags
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
    
    def download_css_resources(self, css_content, css_url):
        """Extract and download resources referenced in CSS"""
        # Extract URLs from CSS
        urls = re.findall(r'url\(["\']?([^"\']+)["\']?\)', css_content)
        for url in urls:
            abs_url = self.get_absolute_url(url)
            if self.is_same_domain(abs_url):
                # Determine if it's an image or font
                if any(ext in url.lower() for ext in ['.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp', '.ico']):
                    filepath = self.output_dir / 'images' / self.sanitize_filename(abs_url)
                    self.download_file(abs_url, filepath)
                elif any(ext in url.lower() for ext in ['.woff', '.woff2', '.ttf', '.eot', '.otf']):
                    filepath = self.output_dir / 'fonts' / self.sanitize_filename(abs_url)
                    self.download_file(abs_url, filepath)
    
    def fetch_all(self):
        """Main method to fetch all website content"""
        print(f"Starting to fetch content from {self.base_url}...\n")
        
        # Fetch main page
        html_content, html_bytes = self.fetch_page(self.base_url)
        if not html_content:
            print("Failed to fetch main page!")
            return
        
        # Save main HTML
        main_html_path = self.output_dir / 'index.html'
        with open(main_html_path, 'wb') as f:
            f.write(html_bytes)
        print(f"[OK] Saved main HTML: {main_html_path}\n")
        
        # Parse HTML
        soup = BeautifulSoup(html_content, 'html.parser')
        
        # Extract resources
        resources = self.extract_resources(soup, html_content)
        
        print(f"Found {len(resources['css'])} CSS files, {len(resources['js'])} JS files, {len(resources['images'])} images")
        print("\nDownloading CSS files...")
        for css_url in resources['css']:
            if self.should_download(css_url):
                css_content, css_bytes = self.fetch_page(css_url)
                if css_content:
                    filepath = self.output_dir / 'css' / self.sanitize_filename(css_url)
                    self.download_file(css_url, filepath)
                    # Download resources referenced in CSS
                    self.download_css_resources(css_content, css_url)
        
        print("\nDownloading JS files...")
        for js_url in resources['js']:
            if self.should_download(js_url):
                filepath = self.output_dir / 'js' / self.sanitize_filename(js_url)
                self.download_file(js_url, filepath)
        
        print("\nDownloading images...")
        for img_url in resources['images']:
            if self.should_download(img_url):
                filepath = self.output_dir / 'images' / self.sanitize_filename(img_url)
                self.download_file(img_url, filepath)
        
        print(f"\n[OK] Completed! All files saved to: {self.output_dir.absolute()}")
        print(f"Total files downloaded: {len(self.downloaded_urls)}")

if __name__ == '__main__':
    url = 'https://www.weddingnama.in/'
    fetcher = WebsiteFetcher(url)
    fetcher.fetch_all()

