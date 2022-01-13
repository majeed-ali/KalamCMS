<?php

require_once("{$_SERVER['DOCUMENT_ROOT']}/router.php");

// ##################################################
// ##################################################
// ##################################################

// Static GET
// In the URL -> http://localhost
// The output -> Index
get('/', 'views/index.php');

// Dynamic GET. Example with 1 variable
// The $id will be available in user.php
get('/user/$id', 'views/user.php');

// Dynamic GET. Example with 2 variables
// The $name will be available in user.php
// The $last_name will be available in user.php
get('/user/$name/$last_name', 'views/user.php');

// Dynamic GET. Example with 2 variables with static
// In the URL -> http://localhost/product/shoes/color/blue
// The $type will be available in product.php
// The $color will be available in product.php
get('/product/$type/color/$color', 'views/product.php');
get('/product/$type', 'views/product.php');

get('/online-visitor', 'views/ovc/index.php');
get('/visitors', 'views/ovc/counter.php');

get('/tool/$toolname', 'views/all-tools.php');
post('/processdata', 'modules/actions.php');

// Dynamic GET. Example with 1 variable and 1 query string
// In the URL -> http://localhost/item/car?price=10
// The $name will be available in items.php which is inside the views folder
get('/item/$name', 'views/items.php');


// ADMIN INDEX PAGE
get('/admin', 'admin/index.php');

// ##################################################
// ##################################################
// ##################################################
// any can be used for GETs or POSTs

// For GET or POST
// The 404.php which is inside the views folder will be called
// The 404.php has access to $_GET and $_POST
any('/404','views/404.php');

