<?php

/**
 * The template for displaying archive pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package emfasi
 */

get_header();

$taxonomy_active = 'cat_faq';
$term_active = get_queried_object();
$term_id_active = $term_active->term_id;
$term_title_active = $term_active->name;
?>

<main id="primary" class="site-main">

	<div class="cont__faqs container">

		<div class="cont__sidebar">
			<div class="cont__sidebar-fixed">
				<div class="cont__title-sidebar">
					<span>Preguntas frecuentes</span>
				</div>

				<div class="cont__list-categories">
					<?php
					// Get the taxonomy's terms
					$terms = get_terms(
						array(
							'taxonomy'   => 'cat_faq',
							'hide_empty' => false,
						)
					);

					// Check if any term exists
					if (!empty($terms) && is_array($terms)) {
						// Run a loop and print them all
						foreach ($terms as $term) {
							$taxonomy = 'cat_faq';
							$term_id = $term->term_id;
							$term_name = $term->name;
							$term_description = $term->description;
							$icon = get_field('icon', $taxonomy . '_' . $term_id);

							if( $icon ):
								// Image variables. 
								$url = $icon['url'];
								$title = $icon['title'];
								$alt = $icon['alt'];
								$caption = $icon['caption'];
							
								// Thumbnail size attributes.
								$size = 'icon-category';
								$thumb = $icon['sizes'][ $size ];
								$width = $icon['sizes'][ $size . '-width' ];
								$height = $icon['sizes'][ $size . '-height' ];
							endif;

					?>
							<div class="cont__term <?php if ($term_id_active == $term_id) echo "term_active"; ?>">
								<a href="<?php echo esc_url(get_term_link($term)) ?>">
									<div class="cont__icon">
										<img class="icon" width="<?= $width ?>" height="<?= $height ?>" src="<?php echo esc_url($thumb); ?>" alt="<?php echo $term_name; ?>" />
									</div>
									<div class="cont__info">
										<div class="cont__name">
											<span>
												<?php echo $term_name; ?>
											</span>
										</div>
										<div class="cont__description">
											<span>
												<?php echo $term_description; ?>
											</span>
										</div>
									</div>
								</a>
							</div>
					<?php
						}
					}
					?>
				</div>
			</div>
		</div>

		<div class="cont__list">
			<?php if (have_posts()) : ?>

				<header class="page-header">
					<h1><?php echo $term_title_active; ?></h1>
				</header><!-- .page-header -->

				<div class="cont__list-faqs">

				<?php
				global $wp_query;
				$args = array_merge($wp_query->query_vars, ['nopaging' => true]);
				query_posts($args);
				/* Start the Loop */
				while (have_posts()) :
					the_post();

					/*
					* Include the Post-Type-specific template for the content.
					* If you want to override this in a child theme, then include a file
					* called content-___.php (where ___ is the Post Type name) and that will be used instead.
					*/
					get_template_part('template-parts/content/content', get_post_type());

				endwhile;

			else :

				get_template_part('template-parts/content/content', 'none');

			endif;
				?>
				</div>
		</div>

	</div>

</main><!-- #main -->



<?php
get_footer();
