<?php 
    $description = get_sub_field('description');
?>

<setion class="section__info_summaries_pages">
    <div class="container">
        <div class="row">

            <div class="cont__header">
                <?php echo $description; ?>
            </div>

            <?php 
            // check for rows (parent repeater)
            if( have_rows('summaries') ): ?>
            <div class="cont__summaries">
                <?php 

                // loop through rows (parent repeater)
                while( have_rows('summaries') ): the_row(); ?>
                <div class="cont__summary">
                    <?php 
                        $icon = get_sub_field('icon');
                        $title = get_sub_field('title');
                        $text = get_sub_field('text');
                        $link = get_sub_field('link');
                    ?>

                    <div class="cont__icon">
                        <?php echo wp_get_attachment_image($icon, 'full') ?>
                    </div>

                    <div class="cont__title">
                        <span><?php echo $title; ?></span>
                    </div>
                    <div class="cont__text">
                        <?php echo $text; ?>
                    </div>

                    <?php if($link): ?>
                    <a class="button" href="<?php echo $link['url']; ?>"><?php echo $link['title']; ?></a>
                    <?php endif; ?>

                </div>

                <?php endwhile; // while( has_sub_field('columns') ): ?>
            </div>
            <?php endif; // if( get_field('columns') ): ?>
        </div> <!-- row -->
    </div> <!-- container -->
</setion> <!-- section -->