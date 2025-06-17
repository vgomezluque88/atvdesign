<section class="section__links">
    <div class="container">
        <?php 
        // check for rows (parent repeater)
        if( have_rows('links') ): ?>
            <div class="cont__links">
            <?php 

            // loop through rows (parent repeater)
            while( have_rows('links') ): the_row(); ?>
                <div class="cont__link">
                    <?php 
                        $title = get_sub_field('title');
                        $description = get_sub_field('description');
                        $link = get_sub_field('link');
                    ?>

                    <div class="cont__inner">
                        <?php if($link): ?><a href="<?php echo $link['url']; ?>"><?php endif; ?>

                            <div class="cont__title">
                                <h3><?php echo $title; ?></h3>
                            </div>
                            <div class="cont__description">
                                <?php echo $description; ?>
                            </div>

                            <div class="link__arrow">
                                <span><?php echo $link['title']; ?></span>
                            </div>
                            
                        <?php if($link): ?></a><?php endif; ?>
                    </div>
                </div>	

            <?php endwhile; // while( has_sub_field('links') ): ?>
            </div>
        <?php endif; // if( get_field('links') ): ?>
    </div> <!-- container -->
</section> <!-- section -->
