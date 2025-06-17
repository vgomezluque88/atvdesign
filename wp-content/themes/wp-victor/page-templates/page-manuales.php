<?php

/**
 * Template Name: Manuales de uso
 *
 * Template for displaying a page without sidebar even if a sidebar widget is published.
 *
 * @package casualplay
 */
get_header();
?>

<?php 

$categorias = get_terms(array(
    'taxonomy' => 'categoria',
    'hide_empty' => true,
));

$buttons = 0;

?>

<main id="primary" class="site-main">

    <div class="container">

        <div class="cont__page-manuales">
            <div class="cont__breadcrumbs">
                <a href="<?php echo get_permalink(56); ?>"><?php _e('Inicio', 'casualplay'); ?></a> /
                <?php the_title(); ?>
            </div>
            <header class="entry-header">
                <?php the_title('<h1 class="entry-title">', '</h1>'); ?>
            </header><!-- .entry-header -->
            <div class="entry-subtitle">
                <?php the_content(); ?>
            </div><!-- .entry-content -->

            <div class="cont__filters">
                <button type="button" data-filter="all" class="mixitup-control-active">Todos</button>
                <?php 
                if (!empty($categorias) && !is_wp_error($categorias)) {
                    foreach ($categorias as $categoria) {
                        ?>
                <button type="button"
                    data-filter=".<?php echo $categoria->slug; ?>"><?php echo $categoria->name; ?></button>
                <?php
                    }
                }
                ?>
            </div>

            <div class="cont__list">
                <?php 
                if (!empty($categorias) && !is_wp_error($categorias)) {
                    foreach ($categorias as $categoria) {
                        
                        // Hacer una consulta para obtener los posts de esta categoría
                        $args = array(
                            'post_type' => 'manual-de-uso',
                            'tax_query' => array(
                                array(
                                    'taxonomy' => 'categoria',
                                    'field'    => 'term_id',
                                    'terms'    => $categoria->term_id,
                                ),
                            ),
                        );
                        $query = new WP_Query($args);
                        
                        // Verificar si hay posts
                        if ($query->have_posts()) {
                            ?>
                <div class="manuales-de-uso mix <?php echo $categoria->slug; ?>">


                    <?php

                            // Mostrar el título de la categoría
                            echo '<div class="cont__title-category">' . esc_html($categoria->name) . '</div>';
                            
                            echo '<div class="cont__items">';
                            while ($query->have_posts()) {
                                $query->the_post();
                            
                                $post_id = get_the_ID();

                                // Obtén las categorías del post (en este caso, de la taxonomía 'categoría_libro')
                                $categorias = wp_get_post_terms($post_id, 'categoria');

                                $pdf = get_field('pdf', $post_id);
                                $buttons++; 

                                ?>
                    <div class="cont__item">
                        <a class="overlay_button" href="#" data-overlay="manual-<?= $buttons ?>">
                            <div class="cont__info">
                                <div class="cont__title">
                                    <?php echo get_the_title(); ?>
                                </div>
                                <div class="cont__category">
                                    <?php if (!empty($categorias) && !is_wp_error($categorias)) {
                                        foreach ($categorias as $categoria) {
                                            echo esc_html($categoria->name);
                                        }
                                    } ?>
                                </div>
                                <div class="filesize">
                                    <?php 
                                    echo number_format($pdf['filesize'] / 1024, 2) . 'kb';
                                     ?>
                                </div>

                                <div class="cont__download">
                                    <span class="text">
                                        <?php _e('Descargar', 'casualplay'); ?>
                                    </span>
                                    <span class="icon-download"></span>
                                </div>
                            </div>
                            <div class="cont__image">
                                <?php the_post_thumbnail('full');  ?>
                            </div>
                        </a>

                        <?php if ($pdf) : ?>
                        <div class="cont__overlay overlay__manual" id="manual-<?= $buttons ?>">
                            <div class="cont__overlay--inner">

                                <div class="cont__close">
                                    <a href="#" class="close-overlay">
                                    </a>
                                </div>
                                <div class="cont__subtitle"><?php _e('Descarga gratuita', 'casualplay'); ?></div>
                                <div class="cont__title"><?php echo get_the_title(); ?></div>

                                <?php
                                                    echo do_shortcode('[contact-form-7 id="3fca90a" title="Descarga"]');
                                                    ?>
                                <script>
                                var element_<?= $buttons ?> = {
                                    url: '<?php echo $pdf['url']; ?>',
                                    section: document.getElementById('manual-<?= $buttons ?>'),
                                };

                                if (element_<?= $buttons ?>.section) {
                                    element_<?= $buttons ?>.url_field = element_<?= $buttons ?>.section
                                        .querySelector('input[name="url_field"]');
                                }

                                if (element_<?= $buttons ?>.url) {
                                    element_<?= $buttons ?>.url_field.value = element_<?= $buttons ?>.url;
                                }
                                </script>

                                <script>
                                document.addEventListener('wpcf7mailsent', function(event) {
                                    var elements = event.detail.inputs;
                                    elements.map(function(element) {
                                        if (element.name == 'url_field') {
                                            window.open(element.value, '_blank');
                                        }
                                    });
                                }, false);
                                </script>

                            </div>
                        </div>
                        <?php endif; ?>
                    </div>
                    <?php
                            }
                            echo '</div>';
                            ?>
                </div>

                <?php
                        } 
                
                        // Resetear la query
                        wp_reset_postdata();
                    }
                }
                 ?>
            </div>
        </div>

    </div>

</main><!-- #main -->

<?php
get_sidebar();
get_footer();