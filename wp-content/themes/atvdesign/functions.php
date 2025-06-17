<?php
/**
 * Atvdesign Theme functions and definitions.
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package atvdesign
 */

add_action( 'wp_enqueue_scripts', 'underscores_parent_theme_enqueue_styles' );

/**
 * Enqueue scripts and styles.
 */
function underscores_parent_theme_enqueue_styles() {
	wp_enqueue_style( 'underscores-style', get_template_directory_uri() . '/style.css' );
	wp_enqueue_style( 'atvdesign-style',
		get_stylesheet_directory_uri() . '/style.css',
		[ 'underscores-style' ]
	);
}
