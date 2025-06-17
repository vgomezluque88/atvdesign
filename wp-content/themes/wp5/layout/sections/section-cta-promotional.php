<?php 
    $title = get_sub_field('title');
    $id_youtube = get_sub_field('id_youtube');
?>

<section class="section_cta_promotional">
    <div class="cta__fixed-button">
        <span><?php echo $title; ?></span>
    </div>
    <div class="cta__fixed-overlay">
        <div class="close-info-overlay"></div>
        <div class="wrapper">
        <lite-youtube style="width:750px" videoid="<?php echo $id_youtube; ?>"></lite-youtube>
        </div>
    </div>
</section> <!-- section -->
