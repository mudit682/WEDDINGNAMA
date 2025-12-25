# Create images directory if it doesn't exist
if (-not (Test-Path 'images')) {
    New-Item -ItemType Directory -Path 'images'
}

$url = 'https://www.weddingnama.in/WNblog/marry-your-best-friend/'

try {
    Write-Host "Fetching page: $url"
    $response = Invoke-WebRequest -Uri $url -UseBasicParsing
    $html = $response.Content
    
    # Find all image URLs (jpg, png, jpeg)
    $imageUrls = [regex]::Matches($html, 'https://[^\"\s<>]+\.(jpg|png|jpeg)', [System.Text.RegularExpressions.RegexOptions]::IgnoreCase) | 
        ForEach-Object { $_.Value } | 
        Select-Object -Unique
    
    Write-Host "Found $($imageUrls.Count) image URLs"
    
    $downloaded = 0
    foreach ($imageUrl in $imageUrls) {
        try {
            $fileName = [System.IO.Path]::GetFileName($imageUrl.Split('?')[0])
            if ($fileName -match '\.(jpg|png|jpeg)$') {
                $filePath = "images\$fileName"
                Invoke-WebRequest -Uri $imageUrl -OutFile $filePath -ErrorAction Stop
                Write-Host "Downloaded: $fileName"
                $downloaded++
            }
        } catch {
            Write-Host "Failed to download: $imageUrl - $_"
        }
    }
    
    Write-Host "`nDownloaded $downloaded images to the 'images' folder"
} catch {
    Write-Host "Error: $_"
}

