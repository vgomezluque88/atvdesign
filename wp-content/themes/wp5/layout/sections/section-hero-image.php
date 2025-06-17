<section class="section__hero-image">
    <div class="container-fluid">
        <div class="row">
            <?php if( have_rows('banners') ): ?>
            <div class="cont__banners owl-carousel">
                <?php while( have_rows('banners') ): the_row(); ?>
                <div class="cont__banner">
                    <?php 
                        // Imagen de escritorio
                        $image_desktop = get_sub_field('image_desktop');
                        if ( !empty($image_desktop) && is_array($image_desktop) ) {
                            $image_desktop_url = isset($image_desktop['url']) ? esc_url($image_desktop['url']) : '';
                            $image_desktop_alt = isset($image_desktop['alt']) ? esc_attr($image_desktop['alt']) : '';
                        } else {
                            $image_desktop_url = '';
                            $image_desktop_alt = '';
                        }

                        // Imagen móvil
                        $image_mobile = get_sub_field('image_mobile');
                        if ( !empty($image_mobile) && is_array($image_mobile) ) {
                            $image_mobile_url = isset($image_mobile['url']) ? esc_url($image_mobile['url']) : '';
                            $image_mobile_alt = isset($image_mobile['alt']) ? esc_attr($image_mobile['alt']) : '';
                        } else {
                            $image_mobile_url = '';
                            $image_mobile_alt = '';
                        }

                        // Link
                        $link = get_sub_field('link');
                    ?>

                    <?php if( $link ): ?>
                    <a href="<?php echo esc_url($link['url']); ?>">
                        <?php echo esc_html($link['title']); ?> enlace a producto
                    <?php endif; ?>

                    <div class="cont__image">
                        <picture>
                            <?php if ( !empty($image_desktop_url) ): ?>
                                <source media="(min-width: 1024px)" srcset="<?php echo $image_desktop_url; ?>">
                            <?php endif; ?>
                            <?php if ( !empty($image_mobile_url) ): ?>
                                <source media="(min-width: 1023px)" srcset="<?php echo $image_mobile_url; ?>">
                            <?php endif; ?>
                            
                            <?php 
                            // Solo se llama a wp_getimagesize() si existe una URL válida para la imagen móvil
                            if ( !empty($image_mobile_url) ) {
                                $getimagesize = wp_getimagesize( $image_mobile_url );
                            } else {
                                $getimagesize = false;
                            }
                            ?>
                            
                            <img <?php echo ( !empty($getimagesize) && isset($getimagesize[3]) ) ? $getimagesize[3] : ''; ?> 
                                 src="<?php echo $image_mobile_url; ?>" 
                                 alt="<?php echo $image_mobile_alt; ?>">
                        </picture>
                    </div>

                    <?php if( $link ): ?>
                    </a>
                    <?php endif; ?>

                </div>
                <?php endwhile; ?>
            </div>
            <?php endif; ?>
        </div> <!-- row -->
    </div> <!-- container -->
</section> <!-- section -->
