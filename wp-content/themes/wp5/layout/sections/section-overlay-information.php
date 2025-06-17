<?php
$image = get_sub_field('image');
$description = get_sub_field('description');
$color_1 = get_sub_field('color_1');
$color_2 = get_sub_field('color_2');
$overlay = get_sub_field('overlay');
?>

<section class="section__overlay_information">
    <div class="container-fluid">
        <div class="row">
            <div class="overlay__info">
                <div class="cont__image">
                    <?php echo wp_get_attachment_image($image, 'full') ?>
                </div>
                <div class="cont__text" style="background-image: linear-gradient(234deg, <?php echo $color_1; ?> 12%, <?php echo $color_2; ?> 54%, <?php echo $color_2; ?> 0%);">
                    <div class="cont__text--inner container">
                        <?php echo $description; ?>
                        <?php if (!empty($overlay)) : ?>
                            <a href="#" class="link__arrow">
                                <span>Saber más</span>
                            </a>
                        <?php endif; ?>
                    </div>
                </div>
                <?php if (!empty($overlay)) : ?>
                    <div class="cont__overlay">
                        <div class="cont__overlay_close"></div>
                        <div class="cont__overlay_content">
                            <div class="cont__overlay--inner container">
                                <div class="cont__close"></div>
                                <div class="cont__description">
                                    <?php echo $overlay; ?>
                                </div>
                            </div>
                        </div>
                    </div>
                <?php endif; ?>
            </div>
        </div> <!-- row -->
    </div> <!-- container -->
</section> <!-- section -->