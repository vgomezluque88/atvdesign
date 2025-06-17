<?php

/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Underscores
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

	<?php underscores_post_thumbnail();
	if (is_singular()) :
		the_title('<h1 class="entry-title">', '</h1>');
	else :
		the_title('<h2 class="entry-title"><a href="' . esc_url(get_permalink()) . '" rel="bookmark">', '</a></h2>');
	endif;
	?>

	<div class="entry-content">
		<?php
		the_content();

		wp_link_pages(
			array(
				'before' => '<div class="page-links">' . esc_html__('Pages:', 'underscores'),
				'after'  => '</div>',
			)
		);
		// Mostrar las categorias del post
		$categories_list = get_the_category_list();
		if ($categories_list) {
			/* translators: 1: list of categories. */
			echo $categories_list; // WPCS: XSS OK.
		}
		?>

	</div><!-- .entry-content -->


</article><!-- #post-<?php the_ID(); ?> -->