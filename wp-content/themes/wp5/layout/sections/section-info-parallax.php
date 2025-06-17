<?php
$image_parallax = get_sub_field('image_parallax');
$description = get_sub_field('description');
$link = get_sub_field('link');
?>

<section class="section_info_parallax">
    <div class="container-fluid">
        <div class="row">
            <div class="cont__parallax">
                <div class="cont__info container">
                    <?php if ($description) { ?>
                        <div class="cont__info--inner">
                            <div class="cont__description">
                                <?php echo $description; ?>
                            </div>
                            <?php if ($link) : ?>
                                <a href="<?php echo $link['url']; ?>" class="link__arrow">
                                    <span><?php echo $link['title']; ?></span>
                                </a>
                            <?php endif; ?>
                        </div>
                    <?php } ?>
                </div>
                <div class="cont__image" style="background-image: url('<?php echo esc_url($image_parallax['url']); ?>');"></div>
            </div>
        </div> <!-- row -->
    </div> <!-- container -->
</section> <!-- section -->