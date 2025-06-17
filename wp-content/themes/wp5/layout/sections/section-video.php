<?php 
    $image_placeholder = get_sub_field('image_placeholder');
    $video_url = get_sub_field('video_url');
?>

<section class="section__video">
    <div class="container">
        <div class="row">
            <div class="cont__placeholder">
                <?php echo wp_get_attachment_image($image_placeholder, 'full') ?>
            </div>
            <div class="cont__video-url">
                <?php echo $video_url; ?>
            </div>
        </div> <!-- row -->
    </div> <!-- container -->
</section> <!-- section --> 