<?php

if(!$_POST['page']) die("0");

$page = (int)$_POST['page'];

if(file_exists('pages/page'.$page.'.htm'))
echo file_get_contents('pages/page'.$page.'.htm');

else echo 'There is no such page!';
?>