<?php 
    $xxx = get_sub_field('xxx');

    $image_desktop = get_sub_field('image');
    $image_mobile  = get_sub_field('image_mobile');

    //example img normal 
    $image = get_sub_field('image');

?>

<section class="section__xxx">
    <div class="container">
        <div class="row">
            <?php 
            // check for rows (parent repeater)
            if( have_rows('columns') ): ?>
            <div class="cont__columns">
                <?php 

                // loop through rows (parent repeater)
                while( have_rows('columns') ): the_row(); ?>
                <div class="cont__column">
                    <?php 
                        $xxx = get_sub_field('xxx');
                        $link = get_sub_field('xxx');
                    ?>

                    <div class="cont__xxx">
                        <?php echo $xxx; ?>
                    </div>

                    <?php if($link): $link_target = $link['target'] ? $link['target'] : '_self';?>
                        <a class="button" href="<?php echo $link['url']; ?>" target="<?php echo esc_attr( $link_target ); ?>"><?php echo $link['title']; ?></a>
                    <?php endif; ?>

                </div>

                <?php endwhile; // while( has_sub_field('columns') ): ?>
            </div>
            <?php endif; // if( get_field('columns') ): ?>
            
            <!-- Image srcset --> 
            <div class="cont__image">
                <?php
                    if ($image_desktop && $image_mobile):
                    // Tamaños reales
                    $desktop_url  = $image_desktop['url'];
                    $desktop_w    = $image_desktop['width'];
                    $desktop_h    = $image_desktop['height'];
                    $desktop_alt  = $image_desktop['alt'];

                    $mobile_url   = $image_mobile['url'];
                    $mobile_w     = $image_mobile['width'];
                    $mobile_h     = $image_mobile['height'];
                    $mobile_alt   = $image_mobile['alt'];
                ?>
                    <picture>
                        <!-- Imagen para escritorio -->
                        <source 
                            media="(min-width: 1024px)" 
                            srcset="<?php echo esc_url($desktop_url); ?>"
                            width="<?php echo esc_attr($desktop_w); ?>"
                            height="<?php echo esc_attr($desktop_h); ?>">

                        <!-- Imagen para móvil -->
                        <source 
                            media="(max-width: 1023px)" 
                            srcset="<?php echo esc_url($mobile_url); ?>"
                            width="<?php echo esc_attr($mobile_w); ?>"
                            height="<?php echo esc_attr($mobile_h); ?>">

                        <!-- Fallback por compatibilidad -->
                        <img 
                            src="<?php echo esc_url($mobile_url); ?>"
                            alt="<?php echo esc_attr($mobile_alt ?: $desktop_alt); ?>"
                            width="<?php echo esc_attr($mobile_w); ?>"
                            height="<?php echo esc_attr($mobile_h); ?>">
                    </picture>
                <?php endif; ?>
            </div>
                
            <!-- Image normal --> 
            <div class="cont__image">
                <img src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" />
            </div>

            <!-- Image HTML5 --> 
            <div class="cont__image">
                <?php echo wp_get_attachment_image($image, 'full') ?>
            </div>

            <span><?php _e('Literal translate', 'wp5'); ?></span>

                
            <?php
            // Post related
            $type_post = get_sub_field('type_post');
            if ($type_post) : ?>
                <div class="cont__type_post">
                    <?php foreach ($type_post as $post) :

                        // Setup this post for WP functions (variable must be named $post).
                        setup_postdata($post); ?>
                        <div class="cont__type_post">
                            <?php
                                $postLink = get_permalink($postId);
                                $postTitle = get_the_title($post->ID);
                                $postImage = get_the_post_thumbnail_url($postId, 'xxxxx');
                                $xxx = get_field('xxx', $post->ID);
                            ?>
                            
                            <div class="cont__title">
                                <?php echo get_the_title($post->ID); ?>
                            </div>
                            <div class="cont__description">
                                <?php echo $xxx; ?>
                            </div>
                            
                        </div>
                    <?php endforeach; ?>
                </div>
                <?php
                // Reset the global post object so that the rest of the page works correctly.
                wp_reset_postdata(); ?>
            <?php endif; ?>


            <?php
            // Term related
                $post_id = get_the_ID(); // Obtiene el ID del post actual
                $taxonomy = get_sub_field('slug_campo', $post_id); // Obtiene los términos de la taxonomía 'sector' para el post actual
                if ($taxonomy) : ?>
                    <div class="cont__taxonomy">
                        <?php foreach ($taxonomy as $sector) : 
                            $term = get_term($sector);
                            $image = get_field('image', 'sector_' . $term->term_id);
                            $term_link = get_term_link($term);
                        ?>
                            <div class="cont__term">

                                <?php echo '<a href="' . esc_url($term_link) . '">'; ?>

                                    <div class="cont__image">
                                        <?php if ($image) :
                                            echo '<img src="' . esc_url($image['url']) . '" alt="' . esc_attr($image['alt']) . '" />';    
                                        endif; ?>

                                        <div class="cont__description">
                                            <?php echo esc_html($term->description); ?>
                                        </div>
                                    </div>

                                    <div class="cont__name">
                                        <h3><?php echo esc_html($term->name);?></h3>
                                    </div>       
                                <?php echo '</a>'; ?>
                            </div>
                        <?php endforeach; ?>
                    </div>
                    <?php
                    // Reset the global post object so that the rest of the page works correctly.
                    wp_reset_postdata(); ?>
                <?php endif; ?>

        </div> <!-- row -->
    </div> <!-- container -->
</section> <!-- section -->