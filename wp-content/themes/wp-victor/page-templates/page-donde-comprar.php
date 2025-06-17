<?php

/**
 * Template Name: Dondé comprar
 *
 * Template for displaying a page without sidebar even if a sidebar widget is published.
 *
 * @package Underscores
 */
get_header();
?>

<div class="wrapper" id="page-wrapper">

    <div class="container" id="content" tabindex="-1">

        <main id="primary" class="site-main">

            <?php get_template_part('template-parts/content/distributors'); ?>

        </main><!-- #main -->

    </div><!-- #content -->

</div><!-- #page-wrapper -->

<?php
get_sidebar();
get_footer();
?>