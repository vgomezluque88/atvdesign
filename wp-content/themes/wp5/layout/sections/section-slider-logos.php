<?php
$logos = get_sub_field('galeria_de_la_secion_de_logos');
?>

<section class="galeria_de_la_secion_de_logos">
    <div class="container">
        <?php
        if ($logos):
            echo '<div class="galeria-logos">';
            foreach ($logos as $imagen):
                echo '<img src="' . esc_url($imagen) . '" alt="' . esc_attr($imagen) . '">';
            endforeach;
            echo '</div>';
        endif;

        ?>
    </div> <!-- container -->
</section> <!-- section -->