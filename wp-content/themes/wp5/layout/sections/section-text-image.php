<?php
$posicion_del_texto = get_sub_field('posicion_del_texto');
$description = get_sub_field('description');
$image = get_sub_field('image');
?>

<section class="section__text_image">
    <div class="container">
        <div class="cont__text_image text-position-<?php echo $posicion_del_texto; ?>">
            <div class="cont__text">
                <?php echo $description; ?>
            </div>
            <div class="cont__image">
                <?php echo wp_get_attachment_image($image, 'full') ?>
            </div>
        </div>
    </div> <!-- container -->
</section> <!-- section -->