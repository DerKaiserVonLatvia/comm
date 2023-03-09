<?php
$get = $_GET;

function writeFile($newWord){
    $myfile = fopen("storage.txt", "a") or die("Unable to open file!");
    fwrite($myfile, $newWord . "\n");
    fclose($myfile);

    $readFile = fopen("storage.txt", "r") or die("Unable to open file!");
    $text = fread($readFile, filesize($readFile));
    print_r($text);
}


writeFile($get["word"]);