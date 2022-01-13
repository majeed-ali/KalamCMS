<?php
/**************************************** 
 *     SESSION START
****************************************/
if(session_status() == PHP_SESSION_NONE){
    //if session has not started
    session_start();
}

/****************************************
 *       CONVERT TEXT TO SPEECH 
 * *************************************/

if(isset($_POST['txt-to-voice']))
{
        if( ! is_csrf_valid() )
        {
            // The form is forged
            // Code here
            // echo 'SESSION '.$_SESSION['csrf'] .'<br>';
            // echo 'POST '.$_POST['csrf'];
            exit();
        }
        else
        {
            $txt=$_POST['txt-to-voice'];
            $tl = trim($_POST['tl']);
            $txt=htmlspecialchars($txt);
            $txt=rawurlencode($txt);
            $html=file_get_contents('https://translate.google.com/translate_tts?ie=UTF-8&client=gtx&q='.$txt.'&tl='.$tl.'');
            $player="<h2 class='text-danger px-2 f-mid'>Converted Audio is here</h2><audio controls='controls' autoplay><source src='data:audio/mpeg;base64,".base64_encode($html)."'></audio>";
            $_SESSION['audioplayer'] = $player;
            echo "<script>window.location.href='/tool/text-to-speech-converter';</script>";
            //exit();
        }  
}
