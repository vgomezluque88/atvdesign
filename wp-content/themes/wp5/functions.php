<?php

/**
 * wp5 functions and definitions.
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package wp5
 */



// defaults
global $dynamicLoaderEm;
$dynamicLoaderEm['owlcarousel'] = true;
$dynamicLoaderEm['jquery-ui'] = true;
$dynamicLoaderEm['wp5'] = true;
$dynamicLoaderEm['flexiblefields'] = true;
$dynamicLoaderEm['menu'] = true;
$dynamicLoaderEm['faqs'] = true;
$dynamicLoaderEm['product'] = true;
$dynamicLoaderEm['ajax_custom'] = true;
$dynamicLoaderEm['lite_yt'] = true;

// global


//includes
require get_stylesheet_directory() . '/inc/asyncdefer-support.php';

require get_stylesheet_directory() . '/inc/acf-google-api-key.php';
require get_stylesheet_directory() . '/inc/ajax-load.php';

//require get_stylesheet_directory() . '/inc/enqueue.php';

require get_stylesheet_directory() . '/inc/tinymce.php';
require get_stylesheet_directory() . '/inc/image-styles.php';
require get_stylesheet_directory() . '/inc/invisible-recaptcha-terms.php';
require get_stylesheet_directory() . '/inc/widgets.php';
require get_stylesheet_directory() . '/inc/loadmore.php';
require get_stylesheet_directory() . '/inc/excerpt.php';
require get_stylesheet_directory() . '/inc/post-order.php';
require get_stylesheet_directory() . '/inc/cookies.php';
require get_stylesheet_directory() . '/inc/acf-options.php';
require get_stylesheet_directory() . '/inc/contact-form.php';
require get_stylesheet_directory() . '/inc/acf-restrict-sections.php';
require get_stylesheet_directory() . '/inc/auto-updates.php';
require get_stylesheet_directory() . '/inc/heartbeat.php';