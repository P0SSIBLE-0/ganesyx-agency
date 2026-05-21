$files = Get-ChildItem -Path "src\components" -Filter "*.module.css" -Recurse

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw -Encoding UTF8

    # Replace hardcoded font families with CSS variables
    $content = $content -replace "font-family: 'Syne', sans-serif;", "font-family: var(--font-heading);"
    $content = $content -replace "font-family: 'Syne';", "font-family: var(--font-heading);"
    $content = $content -replace "font-family: 'Instrument Serif', serif;", "font-family: var(--font-heading);"
    $content = $content -replace "font-family: 'Instrument Serif';", "font-family: var(--font-heading);"
    $content = $content -replace "font-family: 'Inter', sans-serif;", "font-family: var(--font-body);"
    $content = $content -replace "font-family: 'Inter';", "font-family: var(--font-body);"
    $content = $content -replace "font-family: 'DM Mono', monospace;", "font-family: var(--font-mono);"
    $content = $content -replace "font-family: 'DM Mono';", "font-family: var(--font-mono);"

    # Strip Google Fonts @import lines
    $content = $content -replace "@import url\('https://fonts\.googleapis\.com[^']*'\);\s*`r?`n?", ""

    Set-Content $file.FullName $content -NoNewline -Encoding UTF8
    Write-Host "Updated: $($file.Name)"
}

Write-Host "Done. All component CSS files updated."
