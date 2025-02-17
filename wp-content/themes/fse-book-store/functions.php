<?php
/**
 * FSE Book Store functions and definitions
 *
 * @package fse_book_store
 * @since 1.0
 */

if ( ! function_exists( 'fse_book_store_support' ) ) :
	function fse_book_store_support() {

		load_theme_textdomain( 'fse-book-store', get_template_directory() . '/languages' );

		// Add support for block styles.
		add_theme_support( 'wp-block-styles' );

		add_theme_support('woocommerce');

		// Enqueue editor styles.
		add_editor_style(get_stylesheet_directory_uri() . '/assets/css/editor-style.css');

	}
endif;

add_action( 'after_setup_theme', 'fse_book_store_support' );

if ( ! function_exists( 'fse_book_store_styles' ) ) :
	function fse_book_store_styles() {
		// Register theme stylesheet.
		$fse_book_store_theme_version = wp_get_theme()->get( 'Version' );

		$fse_book_store_version_string = is_string( $fse_book_store_theme_version ) ? $fse_book_store_theme_version : false;
		wp_enqueue_style(
			'fse-book-store-style',
			get_template_directory_uri() . '/style.css',
			array(),
			$fse_book_store_version_string
		);

		wp_enqueue_script( 'fse-book-store-custom-script', get_theme_file_uri( '/assets/custom-script.js' ), array( 'jquery' ), true );

		wp_enqueue_style( 'dashicons' );

		wp_style_add_data( 'fse-book-store-style', 'rtl', 'replace' );
	}
endif;

add_action( 'wp_enqueue_scripts', 'fse_book_store_styles' );

/* Theme Credit link */
define('FSE_BOOK_STORE_BUY_NOW',__('https://www.cretathemes.com/products/book-shop-wordpress-theme','fse-book-store'));
define('FSE_BOOK_STORE_PRO_DEMO',__('https://pattern.cretathemes.com/fse-book-store/','fse-book-store'));
define('FSE_BOOK_STORE_THEME_DOC',__('https://pattern.cretathemes.com/free-guide/fse-book-store/','fse-book-store'));
define('FSE_BOOK_STORE_PRO_THEME_DOC',__('https://pattern.cretathemes.com/pro-guide/fse-book-store/','fse-book-store'));
define('FSE_BOOK_STORE_SUPPORT',__('https://wordpress.org/support/theme/fse-book-store/','fse-book-store'));
define('FSE_BOOK_STORE_REVIEW',__('https://wordpress.org/support/theme/fse-book-store/reviews/#new-post','fse-book-store'));
define('FSE_BOOK_STORE_PRO_THEME_BUNDLE',__('https://www.cretathemes.com/products/wordpress-theme-bundle','fse-book-store'));

// Add block patterns
require get_template_directory() . '/inc/block-patterns.php';

// Add block styles
require get_template_directory() . '/inc/block-styles.php';

// Block Filters
require get_template_directory() . '/inc/block-filters.php';

// Svg icons
require get_template_directory() . '/inc/icon-function.php';

// TGM plugin
require get_template_directory() . '/inc/tgm-plugin/plugin-activation.php';

// Customizer
require get_template_directory() . '/inc/customizer.php';

// Get Started
require get_template_directory() . '/inc/get-started/get-started.php';


// Add Getstart admin notice
function fse_book_store_admin_notice() { 
    global $pagenow;
    $theme_args      = wp_get_theme();
    $meta            = get_option( 'fse_book_store_admin_notice' );
    $name            = $theme_args->__get( 'Name' );
    $current_screen  = get_current_screen();

    if( !$meta ){
	    if( is_network_admin() ){
	        return;
	    }

	    if( ! current_user_can( 'manage_options' ) ){
	        return;
	    } if($current_screen->base != 'appearance_page_fse-book-store-guide-page' ) { ?>

	    <div class="notice notice-success dash-notice">
	        <h1><?php esc_html_e('Hey, Thank you for installing FSE Book Store Theme!', 'fse-book-store'); ?></h1>
	        <p><a class="button button-primary customize load-customize hide-if-no-customize get-start-btn" href="<?php echo esc_url( admin_url( 'themes.php?page=fse-book-store-guide-page' ) ); ?>"><?php esc_html_e('Navigate Getstart', 'fse-book-store'); ?></a> 
	        	<a class="button button-primary site-edit" href="<?php echo esc_url( admin_url( 'site-editor.php' ) ); ?>"><?php esc_html_e('Site Editor', 'fse-book-store'); ?></a> 
				<a class="button button-primary buy-now-btn" href="<?php echo esc_url( FSE_BOOK_STORE_BUY_NOW ); ?>" target="_blank"><?php esc_html_e('Buy Pro', 'fse-book-store'); ?></a>
				<a class="button button-primary bundle-btn" href="<?php echo esc_url( FSE_BOOK_STORE_PRO_THEME_BUNDLE ); ?>" target="_blank"><?php esc_html_e('Get Bundle', 'fse-book-store'); ?></a>
	        </p>
	        <p class="dismiss-link"><strong><a href="?fse_book_store_admin_notice=1"><?php esc_html_e( 'Dismiss', 'fse-book-store' ); ?></a></strong></p>
	    </div>
	    <?php

	}?>
	    <?php

	}
}

add_action( 'admin_notices', 'fse_book_store_admin_notice' );

if( ! function_exists( 'fse_book_store_update_admin_notice' ) ) :
/**
 * Updating admin notice on dismiss
*/
function fse_book_store_update_admin_notice(){
    if ( isset( $_GET['fse_book_store_admin_notice'] ) && $_GET['fse_book_store_admin_notice'] = '1' ) {
        update_option( 'fse_book_store_admin_notice', true );
    }
}
endif;
add_action( 'admin_init', 'fse_book_store_update_admin_notice' );

//After Switch theme function
add_action('after_switch_theme', 'fse_book_store_getstart_setup_options');
function fse_book_store_getstart_setup_options () {
    update_option('fse_book_store_admin_notice', FALSE );
}