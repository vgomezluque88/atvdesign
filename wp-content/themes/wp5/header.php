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

    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <?php if ( function_exists( 'gtm4wp_the_gtm_tag' ) ) { gtm4wp_the_gtm_tag(); } ?>
    <?php wp_body_open(); ?>
    <div id="page" class="site">

        <div class="wrapper" id="header-wrapper">

            <div class="container" id="content" tabindex="-1">

                <header id="masthead" class="site-header">
                    <div class="site-branding">
                        <?php
                        if (is_front_page() && is_home()):
                            ?>
                            <h1 class="navbar-brand mb-0">
                                <a rel="home" href="<?php echo esc_url(home_url('/')); ?>" title="<?php echo esc_attr(get_bloginfo('name', 'display')); ?>" itemprop="url">
                                    <div class="cont--logo">
                                        <?php
                                        $color_logo = get_field('color_logo', $post_id);
                                        if ($color_logo): ?>
                                            <?php echo wp_get_attachment_image($color_logo, 'full') ?>
                                    <?php else: ?>
                                            <?php echo wp_get_attachment_image(get_theme_mod('custom_logo'), 'full') ?>
                                        <?php endif; ?>
                                    </div>
                                </a>
                            </h1>
                        <?php
                        else:
                            ?>
                            <div class="navbar-brand mb-0">
                                <a rel="home" href="<?php echo esc_url(home_url('/')); ?>" title="<?php echo esc_attr(get_bloginfo('name', 'display')); ?>" itemprop="url">
                                    <div class="cont--logo">
                                        <?php
                                        $color_logo = get_field('color_logo', $post_id);
                                        if ($color_logo): ?>
                                            <?php echo wp_get_attachment_image($color_logo, 'full') ?>
                                    <?php else: ?>
                                            <?php echo wp_get_attachment_image(get_theme_mod('custom_logo'), 'full') ?>
                                        <?php endif; ?>
                                    </div>
                                </a>
                            </div>
                            <?php
                        endif;
                        ?>
                    </div> <!-- .site-branding -->
                    <div class="cont--menu__open">
                        <label class="burger" for="burger1">
                            <input class="hidden" id="burger1" type="checkbox" /><span></span>
                        </label>
                    </div>
                    <nav id="site-navigation" class="main-navigation">
                            <div class="cont--menu container">
                                <div class="menu--right">
                                    <a href="/" class="logo-menu">
                                        <img src="/wp-content/uploads/logo.png" alt="wp5">
                                    </a>

                                    <?php
                                    wp_nav_menu(
                                        array(
                                            'theme_location' => 'menu-1',
                                            'menu_id' => 'primary-menu',
                                            'container_class' => 'menu-menu-principal-container',
                                        )
                                    );
                                    ?>

                                    <div class="menu--right-bottom">
                                        <?php
                                        $phone = get_field('phone', 'option');
                                        $mail = get_field('mail', 'option');
                                        $address = get_field('address', 'option');
                                        ?>

                                        <div class="cont__info">
                                            <div class="cont__item cont__item--phone">
                                                <i class="icon-phone"></i>
                                                <a href="tel:+34<?php echo $phone; ?>"><?php echo $phone; ?></a>
                                            </div>
                                            <div class="cont__item cont__item--mail">
                                                <i class="icon-mail"></i>
                                                <a href="mailto:<?php echo $mail; ?>"><?php echo $mail; ?></a>
                                            </div>
                                            <div class="cont__item cont__item--address">
                                                <i class="icon-house"></i>
                                                <?php echo $address; ?>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </nav>
                </header><!-- #masthead -->

            </div><!-- #content -->

        </div><!-- #header-wrapper -->