<?php

function custom_excerpt_length($length){
  return 30;
}
add_filter('excerpt_length', 'custom_excerpt_length', 999);

/**
 * Change to read more.
 */
function wp5_excerpt_more($post)
{
  return ' &hellip;';
}
add_filter('excerpt_more', 'wp5_excerpt_more');


//Añadir Extracto a las páginas de WordPress

add_post_type_support( 'page', 'excerpt' );