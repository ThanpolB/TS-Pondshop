<?php
/**
 * Block Styles
 *
 * @package fse_book_store
 * @since 1.0
 */

if ( function_exists( 'register_block_style' ) ) {
	function fse_book_store_register_block_styles() {

		//Wp Block Padding Zero
		register_block_style(
			'core/group',
			array(
				'name'  => 'fse-book-store-padding-0',
				'label' => esc_html__( 'No Padding', 'fse-book-store' ),
			)
		);

		//Wp Block Post Author Style
		register_block_style(
			'core/post-author',
			array(
				'name'  => 'fse-book-store-post-author-card',
				'label' => esc_html__( 'Theme Style', 'fse-book-store' ),
			)
		);

		//Wp Block Button Style
		register_block_style(
			'core/button',
			array(
				'name'         => 'fse-book-store-button',
				'label'        => esc_html__( 'Plain', 'fse-book-store' ),
			)
		);

		//Post Comments Style
		register_block_style(
			'core/post-comments',
			array(
				'name'         => 'fse-book-store-post-comments',
				'label'        => esc_html__( 'Theme Style', 'fse-book-store' ),
			)
		);

		//Latest Comments Style
		register_block_style(
			'core/latest-comments',
			array(
				'name'         => 'fse-book-store-latest-comments',
				'label'        => esc_html__( 'Theme Style', 'fse-book-store' ),
			)
		);


		//Wp Block Table Style
		register_block_style(
			'core/table',
			array(
				'name'         => 'fse-book-store-wp-table',
				'label'        => esc_html__( 'Theme Style', 'fse-book-store' ),
			)
		);


		//Wp Block Pre Style
		register_block_style(
			'core/preformatted',
			array(
				'name'         => 'fse-book-store-wp-preformatted',
				'label'        => esc_html__( 'Theme Style', 'fse-book-store' ),
			)
		);

		//Wp Block Verse Style
		register_block_style(
			'core/verse',
			array(
				'name'         => 'fse-book-store-wp-verse',
				'label'        => esc_html__( 'Theme Style', 'fse-book-store' ),
			)
		);
	}
	add_action( 'init', 'fse_book_store_register_block_styles' );
}
