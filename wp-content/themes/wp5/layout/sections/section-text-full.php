<?php 
    $full_text = get_sub_field('full_text');
?>

<section class="section__text-full">
    <div class="container">
        <?php if($full_text): ?>
            <div class="cont__full-text">
                <?php echo $full_text; ?>
            </div>
        <?php endif; ?>
    </div> <!-- container -->
</section> <!-- section -->