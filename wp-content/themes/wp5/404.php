<?php

/**
 * The template for displaying 404 pages (not found)
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package emfasi
 */

get_header();
?>

<div class="wrapper" id="error-404-wrapper">

	<div class="container" id="content" tabindex="-1">

		<main id="primary" class="site-main">

			<section class="error-404 not-found">
				<header class="page-header">
					<img width="122" height="108" src="/wp-content/themes/wp5/assets/icn-alert.png" alt="icn-alert">
					<h1 class="page-title">Error 404</h1>
				</header><!-- .page-header -->

				<div class="page-content">
					<div class="cont__subtitle text-important">¡Lo sentimos ha ocurrido algo y no hemos podido encontrar lo que buscas!</div>
					<p>Te proponemos volver al <a href="/">inicio</a> de la web</p>

				</div><!-- .page-content -->
			</section><!-- .error-404 -->

		</main><!-- #main -->

	</div><!-- #content -->

</div><!-- #error-404-wrapper -->

<?php
get_footer();
