<?php

/**
 * Template Name: Homepage
 *
 * Template for displaying a page without sidebar even if a sidebar widget is published.
 *
 * @package casualplay
 */
get_header();
?>

<main id="primary" class="site-main">
	<div class="cont__home">
		<div class="cont__home-container">
			<?php get_template_part('template-parts/content/content', 'slider-home'); ?>

		</div>
	</div>

	<div class="cont__proyects">

		<?php
		get_template_part('template-parts/content/content', 'proyectos');
		?>
	</div>

</main><!-- #main -->

<?php
//get_sidebar();
get_footer();
