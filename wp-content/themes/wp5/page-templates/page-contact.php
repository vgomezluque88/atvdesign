<?php

/**
 * Template Name: Contact
 *
 * Template for displaying a page without sidebar even if a sidebar widget is published.
 *
 * @package wp5
 */
get_header();
?>

<?php 
    $form_id = get_field('form');
	$image_desktop = get_the_post_thumbnail_url();
	$image_mobile = get_field('image_mobile');
	$image_mobile_url = esc_url($image_mobile['url']);
	$image_mobile_alt = esc_url($image_mobile['alt']);
?>

<main id="primary" class="site-main">

    <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
        <div class="cont__contact">
            <div class="cont__contact-left container">
                <div class="cont__contact-left--inner">
                    <header class="entry-header">
                        <?php the_title('<h1 class="entry-title">', '</h1>'); ?>
                    </header><!-- .entry-header -->

                    <div class="entry-content">
                        <?php the_content(); ?>
                    </div><!-- .entry-content -->

                    <div class="cont__form">
                        <?php echo do_shortcode('[contact-form-7 id="'. $form_id .'" title="Formulario de contacto" html_class="form__contact"]'); ?>
                    </div>
                </div>
            </div>
            <div class="cont__contact-right">
                <picture>
                    <source media="(min-width: 1024px)" srcset="<?php echo $image_desktop; ?>">
                    <source media="(min-width: 1023px)" srcset="<?php echo $image_mobile_url; ?>">
                    <?php $getimagesize = wp_getimagesize( $image_mobile_url ); ?>
                    <img <?= $getimagesize[3]; ?> src="<?php echo $image_mobile_url; ?>" alt="<?php echo $image_mobile_alt; ?>">
                </picture>
            </div>
        </div>

    </article><!-- #post-<?php the_ID(); ?> -->

</main><!-- #main -->

<?php
get_sidebar();
get_footer();