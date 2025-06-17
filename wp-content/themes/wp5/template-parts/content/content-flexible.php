<?php if (have_rows('content')): ?>

    <?php while (have_rows('content')) : the_row(); ?>

        <?php if (get_row_layout() == 'section_hero_image'): ?>
            <?php get_template_part('layout/sections/section', 'hero-image'); ?>
        <?php endif; ?>

        <?php if (get_row_layout() == 'section_hero_image_video'): ?>
            <?php get_template_part('layout/sections/section', 'hero-image-video'); ?>
        <?php endif; ?>

        <?php if (get_row_layout() == 'section_cta_promotional'): ?>
            <?php get_template_part('layout/sections/section', 'cta-promotional'); ?>
        <?php endif; ?>

        <?php if (get_row_layout() == 'section_links'): ?>
            <?php get_template_part('layout/sections/section', 'links'); ?>
        <?php endif; ?>

        <?php if (get_row_layout() == 'section_info_parallax'): ?>
            <?php get_template_part('layout/sections/section', 'info-parallax'); ?>
        <?php endif; ?>

        <?php if (get_row_layout() == 'section_last_articles'): ?>
            <?php get_template_part('layout/sections/section', 'last-articles'); ?>
        <?php endif; ?>

        <?php if (get_row_layout() == 'section_cta'): ?>
            <?php get_template_part('layout/sections/section', 'cta'); ?>
        <?php endif; ?>

        <?php if (get_row_layout() == 'section_overlay_information'): ?>
            <?php get_template_part('layout/sections/section', 'overlay-information'); ?>
        <?php endif; ?>

        <?php if (get_row_layout() == 'section_text_image'): ?>
            <?php get_template_part('layout/sections/section', 'text-image'); ?>
        <?php endif; ?>

        <?php if (get_row_layout() == 'section_text_full'): ?>
            <?php get_template_part('layout/sections/section', 'text-full'); ?>
        <?php endif; ?>

        <?php if (get_row_layout() == 'section_text_two_columns'): ?>
            <?php get_template_part('layout/sections/section', 'text-two-columns'); ?>
        <?php endif; ?>

        <?php if (get_row_layout() == 'section_info_summaries_pages'): ?>
            <?php get_template_part('layout/sections/section', 'info-summaries-pages'); ?>
        <?php endif; ?>

        <?php if (get_row_layout() == 'section_video'): ?>
            <?php get_template_part('layout/sections/section', 'video'); ?>
        <?php endif; ?>

        <?php if (get_row_layout() == 'section_faq'): ?>
            <?php get_template_part('layout/sections/section', 'faq'); ?>
        <?php endif; ?>

        <?php if (get_row_layout() == 'section_cta_fixed'): ?>
            <?php get_template_part('layout/sections/section', 'cta-fixed'); ?>
        <?php endif; ?>

        <?php if (get_row_layout() == 'section_titulo_grande_y_subtitulo'): ?>
            <?php get_template_part('layout/sections/section', 'title-subtitle'); ?>
        <?php endif; ?>

        <?php if (get_row_layout() == 'section_slider_logos'): ?>
            <?php get_template_part('layout/sections/section', 'slider-logos'); ?>
        <?php endif; ?>

        <?php if (get_row_layout() == 'section_works'): ?>
            <?php get_template_part('layout/sections/section', 'works'); ?>
        <?php endif; ?>

    <?php endwhile; ?>

<?php endif; ?>