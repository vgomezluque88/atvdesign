<?php 
    $text_column_one = get_sub_field('text_column_one');
    $text_column_two = get_sub_field('text_column_two');
?>

<section class="section__text-two-columns">
    <div class="container">
        <div class="cont__columns">
            <?php if($text_column_one): ?>
                <div class="cont__column cont__column--one">
                    <?php echo $text_column_one; ?>
                </div>
            <?php endif; ?>
            <?php if($text_column_two): ?>
                <div class="cont__column cont__column--two">
                    <?php echo $text_column_two; ?>
                </div>
            <?php endif; ?>
        </div>
    </div> <!-- container -->
</section> <!-- section -->