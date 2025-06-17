<?php 
    $title = get_sub_field('title');
    $description = get_sub_field('description');
    $footer = get_sub_field('footer');
?>

<section class="section__faq" itemscope itemtype="https://schema.org/FAQPage">
    <div class="container">
        <div class="section__faq--inner">
            <div class="cont__left">
                <div class="cont__title"><?php echo $title; ?></div>
                <div class="cont__description"><?php echo $description; ?></div>
                <div class="cont__footer"><?php echo $footer; ?></div>
            </div>

            <div class="cont__right">

                <?php 
                // check for rows (parent repeater)
                if( have_rows('questions') ): ?>
                <div class="cont__questions">
                    <?php 
                    // loop through rows (parent repeater)
                    while( have_rows('questions') ): the_row(); ?>
                    <div class="cont__question" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                        <?php 
                            $title = get_sub_field('title');
                            $content = get_sub_field('content');
                            ?>
                        <h3 itemprop="name"><?php echo $title; ?></h3>
                        <div class="cont__content" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <div itemprop="text">
                                <?php echo $content; ?>
                            </div>
                        </div>
                    </div>
                    <?php endwhile; // while( has_sub_field('questions') ): ?>
                </div>
                <?php endif; // if( get_field('questions') ): ?>

                <div class="cont__footer"><?php echo $footer; ?></div>

            </div>
        </div>
    </div> <!-- container -->
</section> <!-- section -->