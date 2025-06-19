<?php
$args = array(
    'post_type'      => 'work',
    'posts_per_page' => -1,
    'post_status'    => 'publish',
);

$query = new WP_Query($args);
?>
<div class="section-work">
    <?php
    if ($query->have_posts()) :
        while ($query->have_posts()) : $query->the_post();

            $campos = get_fields();

            $color     = $campos['color_del_proyecto'] ?? '#ffffff';
            $archivo   = $campos['imagen_o_video_del_proyecto'] ?? null;
            $subtitulo = $campos['subtitulo_del_trabajo'] ?? '';
            $titulo    = $campos['titulo_del_trabajo'] ?? get_the_title();

    ?>
            <article class="proyecto" data-hover-color="<?php echo esc_attr($color); ?>">
                <?php if ($archivo): ?>
                    <div class="media-proyecto">
                        <?php
                        $url = $archivo['url'] ?? '';
                        $mime = $archivo['mime_type'] ?? '';
                        if (strpos($mime, 'image/') === 0): ?>
                            <img src="<?php echo esc_url($url); ?>" alt="<?php echo esc_attr($titulo); ?>">
                        <?php elseif (strpos($mime, 'video/') === 0): ?>
                            <video autoplay
                                muted
                                loop
                                playsinline
                                preload="auto" src="<?php echo esc_url($url); ?>" controls muted playsinline></video>
                        <?php endif; ?>
                    </div>
                <?php endif; ?>
                <div class="contenido-proyecto">
                    <div class="contenido-proyecto_normal">
                        <p class="h2"><?php echo esc_html($titulo); ?></p>
                    </div>
                    <div class="contenido-proyecto_hover">
                        <p class="h2"><?php echo esc_html($titulo); ?></p>
                        <p class="h3"><?php echo esc_html($subtitulo); ?></p>
                    </div>
                </div>
            </article>
    <?php

        endwhile;
        wp_reset_postdata();
    else :
        echo '<p>No hay proyectos disponibles.</p>';
    endif;
    ?>
</div>