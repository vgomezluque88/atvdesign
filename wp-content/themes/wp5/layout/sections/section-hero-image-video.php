<?php
$text_position = get_sub_field('text_position');
$title         = get_sub_field('title');
$subtitle      = get_sub_field('subtitle');
$video         = get_sub_field('video');
$video_youtube = get_sub_field('video_youtube');

$image_desktop = get_sub_field('image_desktop');
if ( !empty($image_desktop) && is_array($image_desktop) ) {
    $image_desktop_url = isset($image_desktop['url']) ? esc_url($image_desktop['url']) : '';
    $image_desktop_alt = isset($image_desktop['alt']) ? esc_attr($image_desktop['alt']) : '';
} else {
    $image_desktop_url = '';
    $image_desktop_alt = '';
}

$image_mobile = get_sub_field('image_mobile');
if ( !empty($image_mobile) && is_array($image_mobile) ) {
    $image_mobile_url = isset($image_mobile['url']) ? esc_url($image_mobile['url']) : '';
    $image_mobile_alt = isset($image_mobile['alt']) ? esc_attr($image_mobile['alt']) : '';
} else {
    $image_mobile_url = '';
    $image_mobile_alt = '';
}

$do_scroll = get_sub_field('do_scroll');
?>

<section class="section__hero-image-video <?php echo esc_attr($text_position); ?>">
    <?php if ( $video && !empty($video['url']) ) { ?>
    <div class="cont__video">
        <!-- The video -->
        <video autoplay muted defaultmuted playsinline loop id="myVideo"
            poster="<?php echo $image_desktop_url; ?>">
            <source src="<?php echo esc_url($video['url']); ?>" type="video/mp4">
        </video>
    </div>
    <?php } ?>

    <?php if ( $video_youtube ) { ?>
    <div class="cont--video--iframe overlay">
        <div class="close-video container">
            <div class="icn-close"></div>
        </div>
        <div class="cont--video">
            <iframe width="400" height="300" src="https://www.youtube.com/embed/<?php echo esc_attr($video_youtube); ?>"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
        </div>
    </div>
    <?php } ?>

    <div class="cont__image">
        <?php if ( !empty($image_mobile_url) ) : ?>
            <?php 
                // Se valida que $image_mobile_url no esté vacío para evitar error en wp_getimagesize()
                $getimagesize_mobile = wp_getimagesize( $image_mobile_url );
            ?>
            <img <?php echo ( !empty($getimagesize_mobile) && isset($getimagesize_mobile[3]) ) ? $getimagesize_mobile[3] : ''; ?> 
                 class="image__mobile" 
                 src="<?php echo $image_mobile_url; ?>"
                 alt="<?php echo $image_mobile_alt; ?>" />
        <?php endif; ?>
        <?php if ( !empty($image_desktop_url) && empty($video) ) : ?>
            <?php 
                $getimagesize_desktop = wp_getimagesize( $image_desktop_url );
            ?>
            <img <?php echo ( !empty($getimagesize_desktop) && isset($getimagesize_desktop[3]) ) ? $getimagesize_desktop[3] : ''; ?> 
                 class="image__desktop" 
                 src="<?php echo $image_desktop_url; ?>"
                 alt="<?php echo $image_desktop_alt; ?>" />
        <?php endif; ?>
    </div>

    <div class="cont__info container">
        <div class="cont__title">
            <span><?php echo esc_html($title); ?></span>
        </div>
        <?php if ( $subtitle ) { ?>
        <div class="cont__subtitle">
            <span><?php echo esc_html($subtitle); ?></span>
        </div>
        <?php } ?>
        <div class="cont__link-video">
            <span><?php _e('Ver vídeo', 'wp5'); ?></span>
        </div>
    </div>
</section>
