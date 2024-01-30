<?php
$directory = 'upload'; // Change this to the path of your upload folder
$files = glob($directory . '/*.html'); // Get all HTML files in the specified directory
if ($files) {
    $latestFile = max($files, FILEINFO_MTIME); // Find the most recently created file
    $latestFileName = basename($latestFile);
    echo "<a href='$directory/$latestFileName'>Latest HTML</a>";
} else {
    echo "No HTML files found.";
}
?>