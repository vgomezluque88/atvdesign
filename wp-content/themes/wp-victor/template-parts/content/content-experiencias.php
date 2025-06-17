<div class="cont_cv-lenguajes">
    <h3 class="cont_cv-lenguajes--title"><?php _e('Lenguajes', 'wp-victor'); ?></h3>
    <div class="cont_cv-lenguajes owl-carousel owl-theme">

        <?php
        // Get type post experiencia    
        $args = array(
            'post_type' => 'experiencia',
            'post_status' => 'publish',
            'posts_per_page' => -1,
            'orderby' => 'date',
            'order' => 'ASC'
        );
        ?>

        <?php $lenguajes = new WP_Query($args); ?>

        <?php if ($lenguajes->have_posts()) : ?>
            <?php while ($lenguajes->have_posts()) : $lenguajes->the_post();
                $imagen_icono_experiencia = get_field('imagen_icono_experiencia');
                $texto_del_icono = get_field('texto_del_icono'); ?>

                <div class="cont_cv-lenguajes--item">
                    <div class="cont_cv-lenguajes--item-icon">
                        <img src="<?php echo $imagen_icono_experiencia; ?>" alt="imagen_icono_experiencia">
                    </div>
                    <div class="cont_cv-lenguajes--item-text">
                        <p><?php the_title(); ?></p>
                    </div>
                </div>
            <?php endwhile; ?>
        <?php endif; ?>

    </div>
</div>