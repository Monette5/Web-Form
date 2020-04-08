<?php
/**
 *  This config file contains the global variables used throughout this application.
 */
// Debug - to enable debugging change to '1'

$debug = '0';
// Get and set environment vars.
$pos_dash = strpos($_SERVER['HTTP_HOST'], '-');
$pos_dot = strpos($_SERVER['HTTP_HOST'], '.');
if (empty($pos_dash)) {
  $environment = substr($_SERVER['HTTP_HOST'], 0, $pos_dot);
} else {
  $environment = substr($_SERVER['HTTP_HOST'], ($pos_dash+1) , ($pos_dot - $pos_dash - 1));
}

// $string = file_get_contents("../app/Settings/config.json");
// $json_a = json_decode($string, true);

//$db_config = new DB_Config;

$bootstrap_theme = 'lux';
$navbar = 'fixed-top';

//define global project directories
define('PROJECT_TEMPLATES_PATH', '../templates/projects/');
define('PROJECT_PATH', '../public/projects/');

// read from json file
$filename = "../app/Settings/theme_settings.json";

$string = file_get_contents($filename);
$json_map = json_decode($string, true);

$GLOBALS['bootstrap_theme'] = $json_map["theme"];
$GLOBALS['brand_logo'] = $json_map["logo"];
