<?php 
    $description = get_sub_field('description');
    $link = get_sub_field('enlace');
?>

<section class="section__cta">
    <div class="container">
        <div class="cont__cta">
            <?php if($link): ?><a href="<?php echo $link['url']; ?>"><?php endif; ?>
            <div class="cont__description">
                <?php echo $description; ?>
            </div>
            <div class="link__arrow">
                <span><?php echo $link['title']; ?></span>
            </div>
            <?php if($link): ?></a><?php endif; ?>
        </div>
    </div> <!-- container -->
</section> <!-- section -->
