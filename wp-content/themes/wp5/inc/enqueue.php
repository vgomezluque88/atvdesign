<?php 
/**
 * wp5 functions and definitions.
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package wp5
 */


if ( ! function_exists( 'wp5_scripts' ) ) {
	function wp5_scripts() {

		global $dynamicLoaderEm;
		$cacheEm = filemtime( get_stylesheet_directory() . '/scss/css/styles.css' );

			//FONTS 
			wp_enqueue_style( 'modern-normalize', get_stylesheet_directory_uri() . '/css/modern-normalize/modern-normalize.css', array(), $cacheEm );

			//FONTS
			wp_enqueue_style( 'fonts-icon', get_stylesheet_directory_uri() . '/fonts/wp5/style.css', array(), $cacheEm );

			// OWL CAROUSEL CSS
			if($dynamicLoaderEm['owlcarousel']){
				wp_enqueue_style( 'owl-style', get_stylesheet_directory_uri() . '/css/owl-carousel/owl.carousel.min.css', array(), $cacheEm );
				wp_enqueue_style( 'owl-theme', get_stylesheet_directory_uri() . '/css/owl-carousel/owl.theme.default.min.css', array(), $cacheEm );
				
				// OWL CAROUSEL JS
				wp_register_script('owl-carousel', (get_stylesheet_directory_uri() . '/js/owl-carousel/owl.carousel.min.js'), true, $cacheEm ,true);
				wp_enqueue_script( 'owl-carousel' );
			}

			// jQuery
			//wp_register_script('jquery', (get_stylesheet_directory_uri() . '/js/jquery/jquery-1.12.4.min.js'), true, $cacheEm ,false);
			//wp_enqueue_script( 'jquery' );

			// JQUERY UI
			if($dynamicLoaderEm['jquery-ui']){
				wp_register_script('jquery-ui-async', (get_stylesheet_directory_uri() . '/js/jquery-ui/jquery-ui.min.js'), true, $cacheEm ,false);
				wp_enqueue_script( 'jquery-ui-async' );
				wp_register_script('jquery.ui.touch-punch.min-async', (get_stylesheet_directory_uri() . '/js/jquery-ui/jquery.ui.touch-punch.min.js'), true, $cacheEm ,false);
				wp_enqueue_script( 'jquery.ui.touch-punch.min-async' );
				wp_enqueue_style( 'jquery-ui-css-async', get_stylesheet_directory_uri() . '/js/jquery-ui/jquery-ui.min.css', array(), $cacheEm );	
			}

			// CUSTOM JS
			if($dynamicLoaderEm['wp5']){
				wp_register_script('wp5', (get_stylesheet_directory_uri() . '/js/wp5.js'), true, $cacheEm ,true);
				wp_enqueue_script( 'wp5' );
			}

			// Flexible Fields
			if($dynamicLoaderEm['flexiblefields']){
				wp_register_script('flexiblefields', (get_stylesheet_directory_uri() . '/js/flexible-fields.js'), true, $cacheEm ,true);
				wp_enqueue_script( 'flexiblefields' );
			}

			// MENU JS
			if($dynamicLoaderEm['menu']){
				wp_register_script('menu', (get_stylesheet_directory_uri() . '/js/menu.js'), true, $cacheEm ,true);
				wp_enqueue_script( 'menu' );
			}

			if($dynamicLoaderEm['faqs']){
				// FAQS JS
				wp_register_script('faqs', (get_stylesheet_directory_uri() . '/js/faqs.js'), true, $cacheEm ,true);
				wp_enqueue_script( 'faqs' );
			}

			// Distributors JS
			$page_id = get_queried_object_id();

			if($dynamicLoaderEm['ajax_custom']){
				// CUSTOM JS
				wp_register_script('ajax-load', (get_stylesheet_directory_uri() . '/js/ajax-load.js'), true, $cacheEm ,true);
				wp_enqueue_script( 'ajax-load' );
				wp_localize_script('ajax-load', 'ajax_custom', array(
					'ajaxurl' => site_url() . '/wp-admin/admin-ajax.php', // WordPress AJAX
				));
			}

			if($dynamicLoaderEm['lite_yt']){
				wp_register_script('lite-yt-load', (get_stylesheet_directory_uri() . '/vendor/lite-youtube-embed/src/lite-yt-embed.js'), true, $cacheEm ,true);
				wp_enqueue_script( 'lite-yt-load' );
				wp_enqueue_style( 'lite-yt-load-css', get_stylesheet_directory_uri() . '/vendor/lite-youtube-embed/src/lite-yt-embed.css', array(), $cacheEm );	
			}

			//STYLES
			wp_enqueue_style( 'animate', get_stylesheet_directory_uri() . '/css/animate/animate.css', array(), $cacheEm );
			wp_enqueue_style( 'custom-styles', get_stylesheet_directory_uri() . '/scss/css/styles.css', array(), $cacheEm );	

	}
}

add_action( 'wp_enqueue_scripts', 'wp5_scripts' );