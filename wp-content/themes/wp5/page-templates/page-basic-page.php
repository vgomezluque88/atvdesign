<?php
/**
 * Template Name: Pagina básica
 *
 * Template for displaying a page without sidebar even if a sidebar widget is published.
 *
 * @package wp5
 */
get_header();
?>

	<main id="primary" class="site-main">

		<div class="container">

			<?php
			while ( have_posts() ) :
				the_post();

				get_template_part( 'template-parts/content/content', 'page' );

				// If comments are open or we have at least one comment, load up the comment template.
				if ( comments_open() || get_comments_number() ) :
					comments_template();
				endif;

			endwhile; // End of the loop.
			?>

		</div>
	</main><!-- #main -->
		
<?php
get_sidebar();
get_footer();
