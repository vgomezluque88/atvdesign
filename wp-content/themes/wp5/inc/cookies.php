<?php 

function wt_cli_add_html_wrapper($html, $begin, $end) {
  // wrap our original HTML with the new tags
  $begin = "<p>";
  $end = "</p>";
  $html = $begin . $html . $end;
  return $html;
  }
  add_filter('wt_cli_change_privacy_overview_title_tag', 'wt_cli_add_html_wrapper', 10, 3);