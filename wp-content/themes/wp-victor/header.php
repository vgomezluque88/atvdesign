<?php

/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Underscores
 */
require get_stylesheet_directory() . '/inc/enqueue.php';
$acf_options = get_fields('option');

?>
<!doctype html>
<html <?php language_attributes(); ?>>

<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">
	<script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
	<!-- Swiper CSS -->
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css">

	<!-- Swiper JS -->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
	<?php wp_body_open(); ?>
	<div id="page" class="site">

		<header id="masthead" class="site-header">
			<div class="container">
				<div class="logo">
					<?php
					// Recuperar el ID almacenado en la opción 'svg_del_header'
					$svg_id = $acf_options['svg_del_header'];
					if ($svg_id) {
						// Obtener la URL del archivo SVG a partir del ID
						$svg_url = wp_get_attachment_url($svg_id);

						if ($svg_url) {
							// Leer el contenido del archivo SVG
							$svg_content = file_get_contents($svg_url);

							// Imprimir el contenido inline para que se renderice como SVG
							echo $svg_content;
						} else {
							echo 'No se encontró la URL del archivo SVG.';
						}
					} else {
						echo 'La opción "svg_del_header" no contiene un ID válido.';
					}
					?>


				</div>
				<nav id="site-navigation" class="main-navigation">
					<button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false"><?php esc_html_e('Primary Menu', 'underscores'); ?></button>
					<?php
					wp_nav_menu(
						array(
							'theme_location' => 'menu-1',
							'menu_id'        => 'primary-menu',
						)
					);
					?>
				</nav><!-- #site-navigation -->
			</div>
		</header><!-- #masthead -->