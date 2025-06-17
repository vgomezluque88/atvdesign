<?php

/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package emfasi
 */

get_header();

?>
<div class="wrapper wrapper-main" id="single-post">

    <main id="primary" class="site-main container">

        <div class="cont--top">
            <div class="columns">
                <div class="cont--header">
                    <?php $term = get_the_terms(get_the_ID(), 'category'); ?>
                    <a href="<?= get_term_link($term[0]->term_id) ?>"><?= $term[0]->name ?></a>
                    <h1><?php the_title(); ?></h1>
                </div>
                <div class="cont--image">
                    <?php echo get_the_post_thumbnail(); ?>
                </div>
                <div id="social-share">
                    <span>Compartir</span>
                    <div class="socialbox">
                        <?php //TODO: Revisar links 
                        ?>
                        <a href="https://www.facebook.com/dialog/feed?&app_id=wp5&link=<?php echo get_permalink() ?>&display=popup&quote=TEXT&hashtag="><span class="icon-icn-xxss-facebook"></span></a>
                        <a href="http://twitter.com/share?text=<?= the_title() ?>&url=<?= get_permalink() ?>"><span class="icon-icn-xxss-twitter"></span></a>
                        <a href="https://api.whatsapp.com/send?text=<?= the_title() ?> <?= get_permalink() ?>"><span class="icon-icn-xxss-whatsaap"></span></a>
                        <a href="mailto:?subject=<?= the_title() ?>&body=<?= get_permalink() ?>"><span class="icon-icn-xxss-email"></span></a>

                    </div>
                </div>
            </div>

            <div class="cont--image">
                <?php echo get_the_post_thumbnail(); ?>
            </div>
        </div>

        <div class="content">
            <div><?php the_content(); ?></div>
        </div>

        <?php

        $post_id = get_the_ID();

        $args = array(
            'cat'            => $term[0]->term_id,
            'post_type'      => "post",
            'post__not_in'    => array($post_id),
            'posts_per_page'  => '3',
            'post_status'    => 'publish',

        );

        $posts = get_posts($args);

        if ($posts) {
        ?>
            <div class="related-posts">
                <div class="title">Artículos relacionados</div>
                <div class="archive-grid cont__posts">
                    <?php
                    foreach ($posts as $post) {
                        get_template_part('template-parts/content/content', 'posts-grid');
                    }
                    ?>
                </div>
            </div>
        <?php
        }

        ?>

    </main><!-- #main -->

</div><!-- #single-wrapper -->

<?php

get_sidebar();
get_footer();
