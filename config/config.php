<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "kalamcms";

// Create connection
$cn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($cn->connect_error) {
  die("Connection failed: " . $cn->connect_error);
}
//out("Connected successfully");


/**************************************** 
 *     SESSION START
****************************************/
if(session_status() == PHP_SESSION_NONE){
    //if session has not started
    session_start();
}

require_once("modules/functions.php");

require_once("modules/queries.php");