<div class="cont_cv-experciencias">
    <h3 class="cont_cv-experiencias--title"><?php _e('Experiencia', 'wp-victor'); ?></h3>

    <?php
    // Get type post experiencia    
    $args = array(
        'post_type' => 'trayectoria',
        'post_status' => 'publish',
        'posts_per_page' => -1,
        'orderby' => 'date',
        'order' => 'ASC'
    );
    ?>

    <?php $trayectoria = new WP_Query($args); ?>

    <?php if ($trayectoria->have_posts()) : ?>
        <?php while ($trayectoria->have_posts()) : $trayectoria->the_post();
            $logo_trayectoria = get_field('logo_trayectoria');
            $fecha_de_trayectoria = get_field('fecha_de_trayectoria');
        ?>
            <div class="cont_cv-experiencias--item">
                <div class="cont_cv-experiencias--item-content">
                    <div class="cont_cv-experiencias--item-content-title">
                        <img src="<?php echo $logo_trayectoria; ?>" alt="logo_trayectoria">
                        <p><?php echo the_title(); ?></p>
                    </div>
                    <div class="cont_cv-experiencias--item-content-date">
                        <p><?php echo $fecha_de_trayectoria; ?></p>
                    </div>
                </div>
                <div class="cont_cv-experiencias--item-text">
                    <p><?php echo the_content(); ?></p>
                </div>
            </div>

        <?php endwhile; ?>
    <?php endif; ?>

</div>
</div>