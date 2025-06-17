<h3 class="cont_cv-proyectos--title"><?php _e('Proyectos', 'wp-victor'); ?></h3>

<div class="cont_cv-proyectos">
    <?php
    $args = array(
        'post_type' => 'proyectos',
        'post_status' => 'publish',
        'posts_per_page' => -1,
        'orderby' => 'date',
        'order' => 'ASC'
    );
    ?>

    <?php $proyectos = new WP_Query($args); ?>
    <?php if ($proyectos->have_posts()) : ?>
        <?php while ($proyectos->have_posts()) : $proyectos->the_post();
            $imagen_proyecto = get_field('imagen_proyecto');
            $explicacion_del_proyecto = get_field('explicacion_del_proyecto');
            $url_proyecto = get_field('url_proyecto');
        ?>
            <div class="cont_cv-proyectos--content">
                <div class="cont_cv-experiencias--item-link">
                    <h3 attr-page="<?php echo $url_proyecto; ?>"><?php the_title(); ?></h3>
                    <a href="<?php echo $url_proyecto; ?>" target="_blank">Ver proyecto</a>
                </div>
            </div>

        <?php endwhile; ?>
    <?php endif; ?>

</div>