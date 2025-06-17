<?php 
/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function wp5_widgets_init() {
    register_sidebar(
        array(
            'name'          => __( 'Menu lang', 'wp5' ),
            'id'            => 'menu-lang',
            'description'   => __( 'Menu langr widget area', 'wp5' ),
            'before_widget' => '<aside id="%1$s" class="widget %2$s">',
            'after_widget'  => '</aside>',
            'before_title'  => '',
            'after_title'   => '',
        )
    );

    register_sidebar(
        array(
            'name'          => __( 'Menú footer right', 'wp5' ),
            'id'            => 'menu-footer-right',
            'description'   => __( 'Menú footer right widget area', 'wp5' ),
            'before_widget' => '<div class="menu-footer-right">',
            'after_widget'  => '</div>',
            'before_title'  => '',
            'after_title'   => '',
        )
    );
}
add_action( 'widgets_init', 'wp5_widgets_init' );
