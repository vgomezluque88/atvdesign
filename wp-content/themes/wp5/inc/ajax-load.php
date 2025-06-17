<?php

function get_ajax_posts_handler() {
    // Query Arguments

    if(strlen($_POST['id'])) {
        global $post;
        $post = get_post( $_POST['id']);
        $postType = get_post_type($post);

        get_template_part( 'template-parts/content/content','single-'.$postType);
        wp_reset_postdata();
    }
    die;
    // The Query
    exit; // exit ajax call(or it will return useless information to the response)
}
add_action('wp_ajax_get_ajax_posts', 'get_ajax_posts_handler');
add_action('wp_ajax_nopriv_get_ajax_posts', 'get_ajax_posts_handler');


function get_ajax_load_more_posts_handler() {
    // Query Arguments

    if( ! empty($_POST['ids'])) {

        $cat = $_POST['cat'];

        $args = array(
            'post_type'     => 'post',
            'post_status'   => 'publish',
            'posts_per_page'=> get_option( 'posts_per_page' ),
            'orderby'       => 'rand',
            'exclude'       => $_POST['ids']
        );

        if( ! empty( $cat ) ){
            $args['category'] = $cat;
        }

        $posts = get_posts($args);

        if( ! empty( $posts ) ){
            foreach( $posts as $post ){
                ?>
                <article href="<?php echo esc_url( get_the_permalink($post->ID) ); ?>" post-id="<?php echo $post->ID; ?>" post-type="<?php echo get_post_type($post); ?>" class="post ajax-load">
                    <div class="post-info">
                        <h4 class="category">
                            <?php
                            $categories = get_the_category($post->ID);
                            if( ! empty( $categories ) ){
                                foreach ($categories as $category) {
                                ?>
                                <a href="<?php echo esc_url( get_category_link($category) ); ?>">
                                    <?php echo $category->name; ?>
                                </a>
                            <?php }
                            } ?>
                        </h4>
                        <h2><?php echo $post->post_title; ?></h2>
                        <span class="link-to-post"></span>
                    </div>
                </article>
                <?php
            }
        }
    }
    die;
    // The Query
    exit; // exit ajax call(or it will return useless information to the response)
}
add_action('wp_ajax_get_ajax_load_more_posts', 'get_ajax_load_more_posts_handler');
add_action('wp_ajax_nopriv_get_ajax_load_more_posts', 'get_ajax_load_more_posts_handler');



/*
    Exemple de query

    foreach ($featuredPosts as $post){
        $postId = $post->ID;


    Exemple de link 
	<a href="<?php echo $productLink; ?>" post-id="<?php echo $posttId ?>" post-type="<?php echo $postType ?>" class="container-product ajax-load"></a>
    <a href="https://polymedic.ddev.site/hola-mundo/" post-id="1" post-type="post" class="container-product ajax-load"> XXXXX </a>						
								
*/
