<?php

/**
 * The template for displaying archive pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package emfasi
 */

get_header();
?>
<div class="wrapper" id="archive-wrapper">

    <div class="container" id="content" tabindex="-1">

        <main id="primary" class="site-main">



            <?php if (have_posts()) : ?>

            <header class="page-header">
                <?php


					if (get_post_type() == 'post') {
						echo '<h1 class="page-title screen-reader-text">Blog</h1>';
					} else {
						the_archive_title('<h1 class="page-title">', '</h1>');
						the_archive_description('<div class="archive-description">', '</div>');
					}
					?>
            </header><!-- .page-header -->

            <?php


				if (get_post_type() == 'post') {
				?>

            <div class="cont--menu-cat">
                <ul>
                    <li class="cat-item"><a href="<?php echo get_permalink(get_option('page_for_posts')); ?>">Ver
                            todos</a></li>
                    <?php wp_list_categories(array(
								'orderby' => 'name',
								'exclude'    => array(1),
								'hide_empty' => true,
								'title_li' => 0
							)); ?>
                </ul>
            </div>

            <div class="archive-grid cont__posts">
                <?php
				}
				/* Start the Loop */
				while (have_posts()) :
					the_post();

					/*
						* Include the Post-Type-specific template for the content.
						* If you want to override this in a child theme, then include a file
						* called content-___.php (where ___ is the Post Type name) and that will be used instead.
						*/
					if (get_post_type() == 'post') {
						get_template_part('template-parts/content/content', 'posts-grid');
					} else {
						get_template_part('template-parts/content/content', get_post_type());
					}

				endwhile;

				if (get_post_type() == 'post') {
					?>
            </div>
            <?php
				}

				get_template_part('layout/load-more/load-more-button', '', array('query' => $wp_query));

			else :

				get_template_part('template-parts/content/content', 'none');

			endif;
			?>

        </main><!-- #main -->

    </div><!-- #content -->

</div><!-- #archive-wrapper -->


<?php
get_sidebar();
get_footer();