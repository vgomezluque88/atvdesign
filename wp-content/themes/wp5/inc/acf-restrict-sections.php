<?php 

function restringir_secciones_flexibles_por_nombre_plantilla($field) {
  global $post;

  // Asegúrate de que estamos en la administración y que existe un objeto $post
  if (is_admin() && $post) {
      // Obtén el nombre del archivo de la plantilla de la página actual
      $plantilla_actual = get_page_template_slug($post->ID);

      // Especifica el nombre del archivo de la plantilla donde quieres aplicar la restricción
      $nombre_plantilla_restringida = 'page-templates/name.php'; // Ajusta esto según tu plantilla

      // Si la plantilla actual coincide con la plantilla restringida, modifica las opciones
      if ($plantilla_actual == $nombre_plantilla_restringida) {
          // Define las secciones (layouts) que quieres permitir
          $secciones_permitidas = ['section_hero_image', 'section_cta_promotional', 'section_video'];

          // Verifica si '$field['layouts']' existe y es un array antes de usar 'foreach'
          if (isset($field['layouts']) && is_array($field['layouts'])) {
            // Filtra las secciones disponibles
            foreach ($field['layouts'] as $key => $layout) {
                if (!in_array($layout['name'], $secciones_permitidas)) {
                    unset($field['layouts'][$key]);
                }
            }
          }
      }
  }

  // Devuelve el campo modificado
  return $field;
}

// Aplica el filtro al campo flexible específico
add_filter('acf/load_field/name=content', 'restringir_secciones_flexibles_por_nombre_plantilla');
