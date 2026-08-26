<?php
// git-reset.php - Temporary deployment unblocker script
header('Content-Type: text/plain');

$repoPath = '/home1/tstpllmy/public_html/brightlandhotel-ajeetgraphics-prod';
$gitBin   = '/usr/local/cpanel/3rdparty/bin/git';

echo "=== Resetting Git Repository ===\n\n";

// 1. Reset tracked files and pull latest code from GitHub
$cmd1 = "cd $repoPath && $gitBin fetch --all 2>&1 && $gitBin reset --hard origin/main 2>&1";
echo "Command 1: $cmd1\n";
echo shell_exec($cmd1) . "\n\n";

// 2. Determine where out/ is located and copy static export files to public_html root
$cmd2 = "cd $repoPath && if [ -d \"webapp/out\" ]; then cp -rf webapp/out/* ./; elif [ -d \"out\" ]; then cp -rf out/* ./; fi 2>&1";
echo "Command 2: $cmd2\n";
echo shell_exec($cmd2) . "\n\n";

// 3. Ensure permissions
$cmd3 = "cd $repoPath && chmod -R 755 _next assets 2>/dev/null || true";
echo "Command 3: $cmd3\n";
echo shell_exec($cmd3) . "\n\n";

echo "=== Deployment Sync Complete! Refresh your browser now. ===";
?>
