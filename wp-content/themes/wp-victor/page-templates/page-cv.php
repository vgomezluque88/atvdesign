<?php

/**
 * Template Name: Curriculum Vitae
 *
 * Template for displaying a cV page.
 *
 * @package wp-victor
 */
get_header();
$curriculum_vitae_imagen = get_field('curriculum_vitae_imagen');

$texto_debajo_de_foto = get_field('texto_debajo_de_foto');

?>


<main id="primary" class="site-main">

    <div class="container">

        <div class="cont__cv">
            <div class="cont__cv-text"><?php echo the_content(); ?></div>
            <img src="<?php echo $curriculum_vitae_imagen; ?>" alt="<?php the_title(); ?>" class="cont__cv-img">
        </div>

        <?php
        get_template_part('template-parts/content/content', 'experiencias');
        ?>

        <?php
        get_template_part('template-parts/content/content', 'proyectos');
        ?>


        <?php
        get_template_part('template-parts/content/content', 'trayectoria');
        ?>

    </div>

</main><!-- #main -->

<?php
get_sidebar();
get_footer();
