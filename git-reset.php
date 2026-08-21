<?php
// git-reset.php - Temporary deployment unblocker script
header('Content-Type: text/plain');

$repoPath = '/home1/tstpllmy/public_html/brightlandhotel-ajeetgraphics-prod';
$gitBin   = '/usr/local/cpanel/3rdparty/bin/git';

echo "=== Resetting Git Repository ===\n\n";

// 1. Hard reset any tracked file changes
$cmd1 = "cd $repoPath && $gitBin reset --hard HEAD 2>&1";
echo "Command 1: $cmd1\n";
echo shell_exec($cmd1) . "\n\n";

// 2. Clean any untracked generated files
$cmd2 = "cd $repoPath && $gitBin clean -fd 2>&1";
echo "Command 2: $cmd2\n";
echo shell_exec($cmd2) . "\n\n";

// 3. Status check
$cmd3 = "cd $repoPath && $gitBin status 2>&1";
echo "Command 3: $cmd3\n";
echo shell_exec($cmd3) . "\n\n";

echo "=== Done! You can now click 'Update from Remote' in cPanel Git Version Control ===";
?>
