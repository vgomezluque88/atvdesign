<?php

/**
 * Template Name: Contact
 *
 * Template for displaying a page without sidebar even if a sidebar widget is published.
 *
 * @package casualplay
 */
get_header();
?>

<?php 
    $form_id = get_field('form');
?>

<main id="primary" class="site-main">

    <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
        <div class="cont__contact">
            <div class="cont__contact-left container">
                <div class="cont__breadcrumbs">
                    <a href="<?php echo get_permalink(56); ?>"><?php _e('Inicio', 'casualplay'); ?></a> /
                    <?php the_title(); ?>
                </div>
                <div class="cont__contact-left--inner">
                    <header class="entry-header">
                        <?php the_title('<h1 class="entry-title">', '</h1>'); ?>
                    </header><!-- .entry-header -->

                    <div class="entry-content">
                        <?php the_content(); ?>
                    </div><!-- .entry-content -->

                    <?php echo get_the_post_thumbnail(); ?>

                    <div class="cont__form">
                        <?php echo do_shortcode('[contact-form-7 id="'. $form_id .'" title="Formulario de contacto" html_class="form__contact"]'); ?>
                    </div>
                </div>
            </div>
            <div class="cont__contact-right">
                <?php echo get_the_post_thumbnail(); ?>
            </div>
        </div>

    </article><!-- #post-<?php the_ID(); ?> -->

</main><!-- #main -->

<?php
get_sidebar();
get_footer();