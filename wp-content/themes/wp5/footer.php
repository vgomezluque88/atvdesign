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

				<div class="footer">

					<div class="menu--menu-footer">
						<div class="cont__menu">
							<div class="cont__menu--social">
								<p><?php _e("Social", "atvdesign"); ?></p>
								<div class="cont__menu--social_content">
									<?php if (have_rows('xxss', 'option')): ?>
										<?php while (have_rows('xxss', 'option')): the_row();
											$id = get_sub_field('id'); // Campo texto
											$link = get_sub_field('link'); // Campo tipo enlace
										?>
											<?php if ($link): ?>
												<a href="<?php echo $link; ?>" target="<?php echo $link; ?>">
													<?php echo $id; ?>
												</a>
											<?php endif; ?>
										<?php endwhile; ?>
									<?php endif; ?>
								</div>
							</div>
						</div>
					</div>
				</div>
		</div>

		</footer><!-- #colophon -->
	</div><!-- container end -->
</div>
</div><!-- footer-wrapper end -->





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