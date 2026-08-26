<?php
// git-reset.php - Temporary deployment unblocker script
header('Content-Type: text/plain');

$repoPath = '/home1/tstpllmy/public_html/brightlandhotel-ajeetgraphics-prod';
$gitBin   = '/usr/local/cpanel/3rdparty/bin/git';

echo "=== Resetting Git Repository ===\n\n";

// 1. Pull latest code from GitHub
$cmd1 = "cd $repoPath && $gitBin pull origin main 2>&1";
echo "Command 1: $cmd1\n";
echo shell_exec($cmd1) . "\n\n";

// 2. Force remove root _next and old root HTML files
$cmd2 = "cd $repoPath && rm -rf _next index.html 404 404.html contact facilities gallery policy rooms tariff terms travel-desk 2>&1";
echo "Command 2: $cmd2\n";
echo shell_exec($cmd2) . "\n\n";

// 3. Copy fresh static build files from out/ into root public_html
$cmd3 = "cd $repoPath && /bin/cp -rf out/* ./ 2>&1";
echo "Command 3: $cmd3\n";
echo shell_exec($cmd3) . "\n\n";

// 4. Copy htaccess if present
$cmd4 = "cd $repoPath && /bin/cp -f out/.htaccess ./ 2>&1";
echo "Command 4: $cmd4\n";
echo shell_exec($cmd4) . "\n\n";

echo "=== Done! Fresh build copied successfully! Refresh site. ===";
?>
