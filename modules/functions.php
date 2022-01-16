<?php

/****************************************
 *       CHECK USER LOGGED IN OR NOT
 * *************************************/
function session_check()
{
    if(isset($_SESSION['user_id']))
    {
        out('USER LOGGED IN');
    }
    else
    {
        out('USER NOT LOGGED IN');
    }
}

/****************************************
 *        GIVE USER ID
 * *************************************/
if (isset($_COOKIE['kcms_session_id']) && $_COOKIE['kcms_session_id'] != NULL)
{
    if(isset($_SESSION['user_id']))
    {
        $cookie_name = "kcms_session_id";
        $cookie_value = $_SESSION['user_id'];
        setcookie($cookie_name, $cookie_value, time() + (86400 * 365), "/"); // 86400 = 1 day
    }
}
else
{
    $cookie_name = "kcms_session_id";
    $cookie_value = md5(uniqid(rand(), true));
    setcookie($cookie_name, $cookie_value, time() + (86400 * 365), "/"); // 86400 = 1 day
}

/****************************************
 *       GET USER AGENT 
 * *************************************/

$user_agent =  $_SERVER['HTTP_USER_AGENT'];

// GET BROWSER
if(strpos($_SERVER['HTTP_USER_AGENT'], 'MSIE') !== FALSE)
$browser = 'Internet explorer';
elseif(strpos($_SERVER['HTTP_USER_AGENT'], 'Trident') !== FALSE) //For Supporting IE 11
$browser = 'Internet explorer';
elseif(strpos($_SERVER['HTTP_USER_AGENT'], 'Firefox') !== FALSE)
$browser = 'Mozilla Firefox';
elseif(strpos($_SERVER['HTTP_USER_AGENT'], 'Edg') !== FALSE)
$browser = 'Microsoft Edge';
elseif(strpos($_SERVER['HTTP_USER_AGENT'], 'Chrome') !== FALSE)
$browser = 'Google Chrome';
elseif(strpos($_SERVER['HTTP_USER_AGENT'], 'Opera Mini') !== FALSE)
$browser = "Opera Mini";
elseif(strpos($_SERVER['HTTP_USER_AGENT'], 'Opera') !== FALSE)
$browser = "Opera";
elseif(strpos($_SERVER['HTTP_USER_AGENT'], 'Safari') !== FALSE)
$browser = "Safari";
else
$browser = 'Unknown browser';

/****************************************
 *       GET OS DETAILS 
 * *************************************/

if (preg_match('/Linux/', $user_agent))
{
    $os = 'Linux';
    if (preg_match('/Android/', $user_agent))
    {
        $os = 'Android';
    }
}
elseif (preg_match('/Windows/', $user_agent))
{
    $os = 'Windows';
}
elseif (preg_match('/Mac/', $user_agent))
{
    $os = 'Mac';
}
elseif (preg_match('/Apple/', $user_agent))
{
    $os = 'Apple';
}
else
{
    $os = 'UnKnown OS';
}

function the_title()
{
    echo 'Title of the Page';
}

function the_content()
{
    echo 'content of the Page';
}
?>

