<!--
                   __              _     
  ___  _ __ ___   / _|  __ _  ___ (_)    
 / _ \| '_ ` _ \ | |_  / _` |/ __|| |    
|  __/| | | | | ||  _|| (_| |\__ \| |  _ 
 \___||_| |_| |_||_|   \__,_||___/|_| (_)
                                         
 
Developed by èmfasi https://emfasi.com

-->

<?php

/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Underscores
 */

require get_stylesheet_directory() . '/inc/enqueue.php';
$post_id = get_the_ID();
?>

<!doctype html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">

    <link rel="manifest" href="/wp-content/themes/wp5/assets/icons/manifest.webmanifest">
    <link rel="mask-icon" href="/wp-content/themes/wp5/assets/icons/safari-pinned-tab.svg" color="#7ab639">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="theme-color" content="#ffffff">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="" rel="stylesheet" async>
    <link rel="stylesheet" media="print" onload="this.onload=null;this.removeAttribute('media');"
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap">
    <noscript>
        <link rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap">
    </noscript>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>

    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <?php if (function_exists('gtm4wp_the_gtm_tag')) {
        gtm4wp_the_gtm_tag();
    } ?>
    <?php wp_body_open(); ?>
    <div id="page" class="site">

        <div class="wrapper" id="header-wrapper">

            <div class="container" id="content" tabindex="-1">

                <header id="masthead" class="site-header">
                    <div id="site-navigation" class="main-navigation">
                        <div class="cont--menu container">
                            <div class="menu--right">

                                <?php
                                wp_nav_menu(
                                    array(
                                        'theme_location' => 'menu-1',
                                        'menu_id' => 'primary-menu',
                                        'container_class' => 'menu-menu-principal-container',
                                    )
                                );
                                ?>



                            </div>
                        </div>
                    </div>
                    <div class="site-branding">
                        <div class="cont--logo">
                            <?php
                            $color_logo = get_field('color_logo', $post_id);
                            if ($color_logo): ?>
                                <?php echo wp_get_attachment_image($color_logo, 'full') ?>
                            <?php else: ?>
                                <?php echo wp_get_attachment_image(get_theme_mod('custom_logo'), 'full') ?>
                            <?php endif; ?>
                        </div>
                    </div> <!-- .site-branding -->
                    <nav id="site-navigation-right" class="main-navigation mobile">
                        <div class="cont--menu container">
                            <div class="menu">

                                <?php
                                $menu_id = '4';
                                $menu_id_2 = '16';
                                $menu = wp_get_nav_menu_object($menu_id);
                                $menu = wp_get_nav_menu_object($menu_id);
                                $menu_2 = wp_get_nav_menu_object($menu_id_2);
                                if ($menu) {
                                    $menu_args = array(
                                        'menu' => $menu->slug,
                                        'menu_class' => 'menu__mobile', // Agrega la clase menu__footer aquí
                                    );

                                    wp_nav_menu($menu_args);
                                }

                                if ($menu_2) {
                                    $menu_args_2 = array(
                                        'menu' => $menu_2->slug,
                                        'menu_class' => 'menu__mobile', // Agrega la clase menu__footer aquí
                                    );

                                    wp_nav_menu($menu_args_2);
                                }
                                ?>

                            </div>
                        </div>
                    </nav>
                    <div class="menu--right">

                        <?php
                        $menu_id = '16';
                        $menu = wp_get_nav_menu_object($menu_id);

                        if ($menu) {
                            $menu_args = array(
                                'menu' => $menu->slug,
                                'menu_class' => 'menu__footer-center', // Agrega la clase menu__footer aquí
                            );

                            wp_nav_menu($menu_args);
                        }
                        ?>

                    </div>
                    <div class="cont--menu__open">
                        <label class="burger" for="burger1">
                            <input class="hidden" id="burger1" type="checkbox" /><span></span>
                        </label>
                    </div>

                </header><!-- #masthead -->

            </div><!-- #content -->

        </div><!-- #header-wrapper -->