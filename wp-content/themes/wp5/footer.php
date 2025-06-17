<?php

/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package emfasi
 */

?>
<div class="wrapper" id="footer-wrapper">

	<div class="footer-wrapper--inner">

		<div class="container" id="content-footer" tabindex="-1">

			<footer id="colophon" class="site-footer">

					<div class="footer__top">

							<div class="cont__logo">
									<img src="/wp-content/uploads/logo.png" alt="House Credit - asesores hipotecarios">
							</div>

							<?php
								$phone = get_field('phone', 'option');
								$mail = get_field('mail', 'option');
								$address = get_field('address', 'option');
							?>
							<div class="cont__info-address">
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

								<div class="menu--menu-footer">
									<div class="cont__menu">
										<?php
										$menu_promo_id = '14';
										$menu_promo = wp_get_nav_menu_object($menu_promo_id);

										if ($menu_promo) {
												$menu_promo_args = array(
														'menu' => $menu_promo->slug,
														'menu_class' => 'menu__footer', // Agrega la clase menu__footer aquí
												);

												wp_nav_menu($menu_promo_args);
										}
										?>
									</div>
								</div>
							</div>
					</div>
					<div class="footer__middle">
						<div class="menu--menu-legal">
							<div class="cont__menu">
								<?php
									$menu_promo_id = '15';
									$menu_promo = wp_get_nav_menu_object($menu_promo_id);

									if ($menu_promo) {
											$menu_promo_args = array(
													'menu' => $menu_promo->slug,
													'menu_class' => 'menu__legal', // Agrega la clase menu__footer aquí
											);

											wp_nav_menu($menu_promo_args);
									}
									?> 
								<div class="cont__xxss">
									<?php 
										$xxss = get_field('xxss', 'option'); 
										
										if( $xxss ) :
											foreach( $xxss as $row ) :
										?>
											<a href="<?php echo $row['link']; ?>" target="_blank" rel="noopener noreferrer">
												<i class="icon-<?php echo $row['id']; ?>"></i>
											</a>
										<?php
											endforeach;
										endif;
									?>

								</div>
							</div>
						</div>
					</div>
			</footer><!-- #colophon -->
		</div><!-- container end -->
	</div>
</div><!-- footer-wrapper end -->

<div class="footer__bottom">
	<div class="container">
		<?php 
			$logos = get_field('logos', 'option');
			if( $logos ) {
		?>
			<div class="footer__logos">
				<?php 
					foreach( $logos as $row ) { ?>
						<img src="<?php echo esc_url($row['logo']['url']); ?>" alt="icon" />
					<?php	
					} ?> 
			</div>
			<?php 
			}
		?>
	</div>
</div>



</div><!-- #page -->

<?php wp_footer(); ?>
<?php $page_id = get_queried_object_id();

if ($page_id == 130) { ?>

<script src="https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js">
</script>
<script
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDal1A14ft9vEhJrHUHtnQwwpz-8vvuBAc&callback=initMap&libraries=geometry"
    async defer></script>
<?php } ?>

</body>

</html>