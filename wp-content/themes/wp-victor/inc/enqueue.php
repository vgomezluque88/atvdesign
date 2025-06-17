<?php

/**
 * wp-victor functions and definitions.
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package wp-victor
 */

if (! function_exists('wp_victor_scripts')) {
	function wp_victor_scripts()
	{
		// The core GSAP library
		wp_enqueue_script('gsap-js', 'https://cdn.jsdelivr.net/npm/gsap@3.12.7/dist/gsap.min.js', array(), false, true);
		// ScrollTrigger - with gsap.js passed as a dependency
		wp_enqueue_script('gsap-st', 'https://cdn.jsdelivr.net/npm/gsap@3.12.7/dist/ScrollTrigger.min.js', array('gsap-js'), false, true);
		// Your animation code file - with gsap.js passed as a dependency
		wp_register_script(
			'gsap',
			(get_stylesheet_directory_uri() . '/js/gsap.js'),
			array(),
			filemtime(get_stylesheet_directory() . '/js/gsap.js'),
			true
		);


		wp_enqueue_script('threejs', 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js', array(), null, true);

		// Cargar OrbitControls manualmente (para evitar fallos de importación)
		wp_enqueue_script('anime', 'https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.2/anime.min.js', array('threejs'), null, true);

		wp_enqueue_script('three-scene', get_stylesheet_directory_uri() . '/js/three-scene.js', array('threejs'), null, true);

		//FONTS
		wp_enqueue_style(
			'custom-styles',
			get_stylesheet_directory_uri() . '/sass/style.css',
			array(),
			filemtime(get_stylesheet_directory() . '/css/style.css')
		);
		// JS CUSTOM
		wp_register_script(
			'victor-animations',
			(get_stylesheet_directory_uri() . '/js/victor-animations.js'),
			array(),
			filemtime(get_stylesheet_directory() . '/css/style.css'),
			true
		);
		wp_enqueue_script('victor-animations');

		wp_register_script('wp-victor', (get_stylesheet_directory_uri() . '/js/wp-victor.js'), true, '1.0', true);
		wp_enqueue_script('wp-victor');


		// OWL CAROUSEL JS
		wp_register_script('owl-carousel', (get_stylesheet_directory_uri() . '/js/owl-carousel/owl.carousel.min.js'), true, '1.0.0', true);
		wp_enqueue_script('owl-carousel');
	}
}

add_action('wp_enqueue_scripts', 'wp_victor_scripts');
