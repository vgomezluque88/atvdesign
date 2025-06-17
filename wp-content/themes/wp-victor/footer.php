<?php

/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Underscores
 */

?>

<footer id="colophon" class="site-footer">
	<div class="site-info container-margin">
		<div class="contact-container">
			<div class="contact-container-left">
				<div class="contact-container-left-top">
					<h3 class="h2"><?php _e('Contacta ', 'wp-victor'); ?></h3>
					<p><?php _e('Aqui te dejo mis redes sociales y mis codigos de proyecto.') ?></p>
					<div class="contact-container-left-social">
						<?php
						// Campo opciones de acf, es un repeater llamado web_para_contactar con un campo imagen y una url que es un link externo a la imagen
						$contact = get_field('web_para_contactar', 'option');
						if ($contact): ?>
							<?php foreach ($contact as $c):
							?>
								<a href="<?php echo $c['url_de_contacto']; ?>" target="_blank">
									<?php
									$svg_image = $c['imagen_de_contacto'];
									if ($svg_image) {
										echo file_get_contents($svg_image['url']);
									}
									?>
								</a>
							<?php endforeach; ?>
						<?php endif; ?>
					</div>
				</div>
				<p class="contact-copyright">&copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?></p>

			</div>
			<div class="contact-container-right">
				<div class="contact-container-right-content">
					<p><?php _e('Enviame un correo si tienes alguna duda.', 'wp-victor'); ?></p>
					<?php echo do_shortcode('[contact-form-7 id="da5f24b" title="Contact form 1"]'); ?>
				</div>


			</div>
		</div><!-- .site-info -->

</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>

</html>