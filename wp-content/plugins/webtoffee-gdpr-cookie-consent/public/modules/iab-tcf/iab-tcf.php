<?php
if (!defined('ABSPATH')) {
    exit;
}

class Cookie_Law_Iab_Tcf {

    public $enabled = true;
    public $list_url = 'https://cdn.webtoffee.com/iab-tcf/cmp/v3/';
    public function __construct() {
        add_action( 'init', array($this, 'init') );
        add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_scripts'));
    }

    public function init() {
        if( !$this->enabled ) return;
        $this->maybe_update_vendor_list();
    }

    public function update_vendor_list() {
        $i18n = new Cookie_Law_Info_Languages();
        $languages = $i18n->cli_get_current_language_code();
        $this->download($this->list_url.'vendor-list.json');
        foreach ($languages as $lang ) {
           
            $this->download($this->list_url. "purposes-".$lang.".json");
		}
        set_transient( 'cli_vendor_fle_update', true, WEEK_IN_SECONDS );
    }

    public function maybe_update_vendor_list() {
        if ( ! get_transient( 'cli_vendor_fle_update') ) {
            $this->update_vendor_list();
        }
    }

    public static function get_upload_path( $path = '', $is_url = false ) {
        $uploads    = wp_upload_dir();
        $upload_dir =  $uploads['basedir'] . '/webtoffee/' . $path;
        $upload_url =  $uploads['baseurl'] . '/webtoffee/' .$path;
		if ( !is_dir( $upload_dir)  ) {
			wp_mkdir_p($upload_dir);
		}
		return $is_url ? $upload_url : trailingslashit( $upload_dir );
    }
    public function download( $src ) {
        require_once( ABSPATH . 'wp-admin/includes/file.php' );
	    $upload_dir = $this->get_upload_path('cmp/v3/');
        
        if ( ! file_exists( $upload_dir ) ) {
            wp_mkdir_p( $upload_dir, 0755);
        }

        //download file
        $tmpfile  = download_url( $src, $timeout = 25 );
        $file     = $upload_dir . basename( $src );
       
        //check for errors
        if ( !is_wp_error( $tmpfile ) ) {
            //remove current file
            if ( file_exists( $file ) ) {
                unlink( $file );
            }

            //in case the server prevents deletion, we check it again.
            if ( ! file_exists( $file ) ) {
                copy( $tmpfile, $file );
            }
        }

        if ( is_string( $tmpfile ) && file_exists( $tmpfile ) ) {
            unlink( $tmpfile );
        }
    }

    public static function get_vendor_list( $language = '') {

        $vendor_list_path='';

        $path =  self::get_upload_path('cmp', true);

        // Get the upload directory path
        $upload_dir = wp_upload_dir();

        if(!empty($language))
        {
            // Specify the file path within the wp_uploads folder
            $vendor_list_path = $upload_dir['basedir'] . '/webtoffee/cmp/v3/purposes-'.$language.'.json';

            if(file_exists($vendor_list_path))
            {
                return $vendor_list_path;
            }
            else{

                $vendor_list_path = $upload_dir['basedir'] . '/webtoffee/cmp/v3/vendor-list.json';
            }
        }
        else{

            $vendor_list_path = $upload_dir['basedir'] . '/webtoffee/cmp/v3/vendor-list.json';
        }
        if ( ! file_exists( $vendor_list_path ) ) {

            $tcf = new Cookie_Law_Iab_Tcf;
            $tcf->update_vendor_list();
        }
        return $vendor_list_path;
    }

    public function enqueue_scripts() {
        $settings = Cookie_Law_Info::get_settings();
        $is_iab_enabled = isset($settings['iab_enabled']) ? $settings['iab_enabled'] : false; 
        if( is_admin() || !$is_iab_enabled ) return;
        $suffix = defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? '' : '.min';
        $language = 'es';
        $i18n = new Cookie_Law_Info_Languages();
        $language_code_arr = $i18n->cli_get_current_language_code();
        if($is_iab_enabled)
        {
            wp_enqueue_script( 'cli-iab-script',plugin_dir_url( __FILE__ ) . 'assets/js/script' . $suffix . '.js', array(), CLI_VERSION, false );
            wp_localize_script('cli-iab-script', 'iabConfig', array(
                'status' => $this->enabled,
                'baseUrl' => $this->get_upload_path('cmp', true),
                'latestFilename' => 'v3/vendor-list.json',
                'languageFilename' => "v3/purposes-".$language.".json",
                'appliedLaw' =>  $settings['consent_type'],
                'allowedVendors' => Cookie_Law_Info_Settings_Popup_For_IAB::get_allowed_vendor_list()
            ) );
            wp_localize_script('cli-iab-script', 'iabTranslations', array(
                'storageDisclosures' => array(
                    'title' => __('Device Storage Disclosure', 'webtoffee-gdpr-cookie-consent'), 
                    'headers' => array(
                        'name' => __('Name', 'webtoffee-gdpr-cookie-consent'),
                        'type' => __('Type', 'webtoffee-gdpr-cookie-consent'),
                        'duration' => __('Duration', 'webtoffee-gdpr-cookie-consent'),
                        'domain' => __('Domain', 'webtoffee-gdpr-cookie-consent'),
                        'purposes' => __('Purposes', 'webtoffee-gdpr-cookie-consent'),
                    )
                )
            ) );
        } 
    }
}
new Cookie_Law_Iab_Tcf();