<?php
/**
 * Define all utility functions
 *
 * @link       http://cookielawinfo.com/
 * @since      2.5.0
 *
 * @package    Cookie_Law_Info
 * @subpackage Cookie_Law_Info/utility
 */

/**
 * 
 *
 *
 * @package    Cookie_Law_Info
 * @subpackage Cookie_Law_Info/utility
 * @author     WebToffee <info@webtoffee.com>
 */
class Cookie_Law_Info_Utility {



	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    2.5.0
	 */
	public function __construct() {
		
	}

	/**
	 * Returns default contents to be loaded while creating the banner.
	 *
	 * @return array
	 */
	public static function get_default_contents() {
		$contents = wp_cache_get( 'cli_contents_default', 'wt_cli_banner_contents' );
		if ( ! $contents ) {
			$contents = CLI_PLUGIN_PATH. 'admin/modules/settings-popup/settings-for-iab/assets/wt-cli-iab-vendor.json';
			wp_cache_set( 'cli_contents_default', $contents, 'wt_cli_banner_contents', 12 * HOUR_IN_SECONDS );
		}
		return $contents;
	}
}