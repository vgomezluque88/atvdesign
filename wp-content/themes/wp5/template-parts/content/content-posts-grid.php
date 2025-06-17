<?php

$postId = $post->ID;
$postTitle = $post->post_title;
$postLink = get_permalink($postId);
$postExtract = get_the_excerpt($postId); 
$postImage = get_the_post_thumbnail($postId, 'blog-grid-big');
$termPost = wp_get_post_terms($postId, 'category');
$postType = get_post_type($post);

?>
<div class="cont--post">
    <div class="cont--inner">
        <a href="<?php echo $postLink; ?>" post-id="<?php echo $postId ?>" post-type="<?php echo $postType ?>">
            <div class="cont--post-info">
                <div class="cont--post-image">
                    <?php echo $postImage ?>
                </div> 
            </div>
        </a>
        <div class="post-category">
            <a href="<?php echo get_category_link( $termPost[0]->term_id ); ?>"><?php echo $termPost[0]->name; ?></a>
        </div>
        <a href="<?php echo $postLink; ?>" post-id="<?php echo $postId ?>" post-type="<?php echo $postType ?>">
            <div class="cont--post-info">
                <div class="cont--post-title">
                    <h3><?php echo $postTitle; ?></h3>
                </div>
            </div>
        </a>
    </div>
</div>