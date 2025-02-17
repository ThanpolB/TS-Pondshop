<?php
/**
 * Block Patterns
 *
 * @package fse_book_store
 * @since 1.0
 */

function fse_book_store_register_block_patterns() {
	$block_pattern_categories = array(
		'fse-book-store' => array( 'label' => esc_html__( 'FSE Book Store', 'fse-book-store' ) ),
		'pages' => array( 'label' => esc_html__( 'Pages', 'fse-book-store' ) ),
	);

	$block_pattern_categories = apply_filters( 'fse_book_store_block_pattern_categories', $block_pattern_categories );

	foreach ( $block_pattern_categories as $name => $properties ) {
		if ( ! WP_Block_Pattern_Categories_Registry::get_instance()->is_registered( $name ) ) {
			register_block_pattern_category( $name, $properties );
		}
	}
}
add_action( 'init', 'fse_book_store_register_block_patterns', 9 );