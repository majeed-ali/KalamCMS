<?php 
    require_once('config/config.php');
?>

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="format-detection" content="telephone=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="author" content="Abdul Majeed Ali">
    <meta name="robots" content="index, follow">
    
    <?php
    $web_link = "https://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
    if(substr($web_link,0,33) == "https://ubaycreative.com/product/")
    {
        $metaslug = $_GET['url'];
        $metaid = $_GET['pid'];
        
        $metasql = "SELECT * FROM tbl_produ WHERE slug = '{$metaslug}' AND pid = {$metaid}";
        $metaresult = $cn->query($metasql);
        if($metaresult->num_rows>0)
        {
          while($metaoutput = $metaresult->fetch_assoc())
          {
              $metapname = substr($metaoutput['pname'],0,60);
              $metadesc = substr($metaoutput['short_desc'],0,160);
              $metapimg = $metaoutput['pimg'];
          }
        }
    ?>
    <!-- Primary Meta Tags -->
    <title>UBAY CREATIVE - <?php echo $metapname; ?></title>
    <meta name="title" content="<?php echo $metapname; ?>">
    <meta name="description" content="<?php echo $metadesc; ?>">
    <meta name="keywords" content="<?php echo $metapname; ?>">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="<?php echo $web_link; ?>">
    <meta property="og:title" content="<?php echo $metapname; ?>">
    <meta property="og:description" content="<?php echo $metadesc; ?>">
    <meta property="og:image" content="https://ubaycreative.com/<?php echo $metapimg; ?>">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="<?php echo $web_link; ?>">
    <meta property="twitter:title" content="<?php echo $metapname; ?>">
    <meta property="twitter:description" content="<?php echo $metadesc; ?>">
    <meta property="twitter:image" content="https://ubaycreative.com/<?php echo $metapimg; ?>">
    <?php } ?>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.1/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="<?php get_url(); ?>/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Mukta:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet">
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"/>
</head>
<body>
 
<header class="sticky-top">
    <nav class="navbar navbar-expand-lg sticky-top navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="/">LOGO</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i class="fas fa-align-right"></i>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="<?php get_url();?>/projects">Projects</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="<?php get_url();?>/tools" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                Tools
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="<?php get_url();?>/tool/text-to-speech-converter"><i class="fas fa-language"></i> Text to Speech Converter (TTS)</a>
                <a class="dropdown-item" href="<?php get_url();?>/tool/online-image-converter"><i class="far fa-image"></i> Image Converter</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="<?php get_url();?>/tool/ip-lookup"><i class="fas fa-search-location"></i> IP Lookup</a>
                <a class="dropdown-item" href="<?php get_url();?>/tool/json-schema-generator"><i class="fas fa-database"></i> J-SON Schema Generator</a>
                <a class="dropdown-item" href="<?php get_url();?>/tool/unit-converter"><i class="fas fa-vial"></i> Unit Converter</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="<?php get_url();?>/tool/text-case-converter"><i class="fas fa-text-height"></i> Text Case Converter</a>
                <a class="dropdown-item" href="<?php get_url();?>/tool/character-word-count-tool"><i class="fas fa-stopwatch-20"></i> Character Word Count Tool</a>
                <a class="dropdown-item" href="<?php get_url();?>/tool/find-and-replace"><i class="fas fa-search"></i> Find & Replace</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="<?php get_url();?>/tools"><i class="fas fa-ellipsis-v"></i> More tools &raquo</a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Blogs</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control-sm mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-warning btn-sm my-2 my-sm-0 px-2" type="submit"><i class="fas fa-search"></i> Search</button>
          </form>
        </div>
      </div>
      </nav>
</header>