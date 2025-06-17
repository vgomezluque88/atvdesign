<?php
/**
 * WP Victor Theme functions and definitions.
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package wp-victor
 */

add_action( 'wp_enqueue_scripts', 'underscores_parent_theme_enqueue_styles' );
require get_stylesheet_directory() . '/inc/options.php';

/**
 * Enqueue scripts and styles.
 */
function underscores_parent_theme_enqueue_styles() {
	wp_enqueue_style( 'underscores-style', get_template_directory_uri() . '/style.css' );
	wp_enqueue_style( 'wp-victor-style',
		get_stylesheet_directory_uri() . '/style.css',
		[ 'underscores-style' ]
	);
}
function permitir_svg_en_acf($mime_types) {
    $mime_types['svg'] = 'image/svg+xml';
    return $mime_types;
}
add_filter('upload_mimes', 'permitir_svg_en_acf');

   