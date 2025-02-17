<?php
 /**
  * Title: Main Header
  * Slug: fse-book-store/main-header
  */
?>

<!-- wp:group {"className":"header-wrap","style":{"border":{"bottom":{"color":"var:preset|color|border-color","width":"2px"},"top":[],"right":[],"left":[]},"spacing":{"padding":{"top":"var:preset|spacing|40","bottom":"var:preset|spacing|40"}}},"backgroundColor":"background","layout":{"type":"default"}} -->
<div class="wp-block-group header-wrap has-background-background-color has-background" style="border-bottom-color:var(--wp--preset--color--border-color);border-bottom-width:2px;padding-top:var(--wp--preset--spacing--40);padding-bottom:var(--wp--preset--spacing--40)"><!-- wp:columns {"verticalAlignment":"center","className":"header-wrap-inner"} -->
<div class="wp-block-columns are-vertically-aligned-center header-wrap-inner"><!-- wp:column {"verticalAlignment":"center","width":"40%","className":"head-left"} -->
<div class="wp-block-column is-vertically-aligned-center head-left" style="flex-basis:40%"><!-- wp:columns {"verticalAlignment":"center"} -->
<div class="wp-block-columns are-vertically-aligned-center"><!-- wp:column {"verticalAlignment":"center"} -->
<div class="wp-block-column is-vertically-aligned-center"><!-- wp:group {"style":{"spacing":{"blockGap":"var:preset|spacing|20"}},"layout":{"type":"flex","flexWrap":"nowrap"}} -->
<div class="wp-block-group"><!-- wp:image {"id":204,"sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image size-full"><img src="<?php echo get_parent_theme_file_uri( '/assets/images/icon.png' ); ?>" alt="" class="wp-image-204"/></figure>
<!-- /wp:image -->

<!-- wp:group {"layout":{"type":"constrained"}} -->
<div class="wp-block-group"><!-- wp:heading {"level":6,"style":{"elements":{"link":{"color":{"text":"var:preset|color|heading"}}},"typography":{"fontSize":"14px","fontStyle":"normal","fontWeight":"600"},"spacing":{"margin":{"top":"0","bottom":"0"}}},"textColor":"heading"} -->
<h6 class="wp-block-heading has-heading-color has-text-color has-link-color" style="margin-top:0;margin-bottom:0;font-size:14px;font-style:normal;font-weight:600"><?php esc_html_e('Call Us','fse-book-store'); ?></h6>
<!-- /wp:heading -->

<!-- wp:paragraph {"style":{"elements":{"link":{"color":{"text":"var:preset|color|primary"}}},"typography":{"fontSize":"16px","fontStyle":"normal","fontWeight":"600","lineHeight":"1.2"},"spacing":{"margin":{"top":"0","bottom":"0"}}},"textColor":"primary"} -->
<p class="has-primary-color has-text-color has-link-color" style="margin-top:0;margin-bottom:0;font-size:16px;font-style:normal;font-weight:600;line-height:1.2"><?php esc_html_e('+1800-1245-1545','fse-book-store'); ?>
</p>
<!-- /wp:paragraph --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:column -->

<!-- wp:column {"verticalAlignment":"center"} -->
<div class="wp-block-column is-vertically-aligned-center"><!-- wp:group {"layout":{"type":"constrained"}} -->
<div class="wp-block-group"><!-- wp:heading {"level":6,"style":{"elements":{"link":{"color":{"text":"var:preset|color|heading"}}},"typography":{"fontSize":"14px","fontStyle":"normal","fontWeight":"600"},"spacing":{"margin":{"top":"0","bottom":"0"}}},"textColor":"heading"} -->
<h6 class="wp-block-heading has-heading-color has-text-color has-link-color" style="margin-top:0;margin-bottom:0;font-size:14px;font-style:normal;font-weight:600"><?php esc_html_e('Email Us','fse-book-store'); ?></h6>
<!-- /wp:heading -->

<!-- wp:paragraph {"style":{"elements":{"link":{"color":{"text":"var:preset|color|primary"}}},"typography":{"fontSize":"16px","fontStyle":"normal","fontWeight":"600","lineHeight":"1.2"},"spacing":{"margin":{"top":"0","bottom":"0"}}},"textColor":"primary"} -->
<p class="has-primary-color has-text-color has-link-color" style="margin-top:0;margin-bottom:0;font-size:16px;font-style:normal;font-weight:600;line-height:1.2"><?php esc_html_e('support@example.com','fse-book-store'); ?></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group --></div>
<!-- /wp:column --></div>
<!-- /wp:columns --></div>
<!-- /wp:column -->

<!-- wp:column {"verticalAlignment":"center","width":"25%","className":"head-logo"} -->
<div class="wp-block-column is-vertically-aligned-center head-logo" style="flex-basis:25%"><!-- wp:group {"layout":{"type":"flex","flexWrap":"nowrap","justifyContent":"center"}} -->
<div class="wp-block-group"><!-- wp:site-logo /-->

<!-- wp:site-title {"textAlign":"center","style":{"elements":{"link":{"color":{"text":"var:preset|color|heading"}}},"typography":{"fontStyle":"normal","fontWeight":"700","fontSize":"28px"}},"textColor":"heading"} /--></div>
<!-- /wp:group --></div>
<!-- /wp:column -->

<!-- wp:column {"verticalAlignment":"center","width":"35%","className":"head-right"} -->
<div class="wp-block-column is-vertically-aligned-center head-right" style="flex-basis:35%"><!-- wp:columns {"verticalAlignment":"center"} -->
<div class="wp-block-columns are-vertically-aligned-center"><!-- wp:column {"verticalAlignment":"center","width":"27%","className":"head-wishlist"} -->
<div class="wp-block-column is-vertically-aligned-center head-wishlist" style="flex-basis:27%"><!-- wp:shortcode -->

<!-- /wp:shortcode --></div>
<!-- /wp:column -->

<!-- wp:column {"verticalAlignment":"center","width":"27%","className":"head-cart"} -->
<div class="wp-block-column is-vertically-aligned-center head-cart" style="flex-basis:27%"><!-- wp:group {"style":{"spacing":{"blockGap":"10px"}},"layout":{"type":"flex","flexWrap":"nowrap","justifyContent":"right"}} -->
<div class="wp-block-group"><!-- wp:woocommerce/mini-cart {"iconColor":{"slug":"primary","color":"#FF9439","name":"Primary","class":"has-primary-icon-color"},"productCountColor":{"slug":"heading","color":"#243142","name":"Heading","class":"has-heading-product-count-color"}} /-->

<!-- wp:paragraph {"style":{"elements":{"link":{"color":{"text":"var:preset|color|body-text"}}},"typography":{"fontSize":"14px","fontStyle":"normal","fontWeight":"600"}},"textColor":"body-text"} -->
<p class="has-body-text-color has-text-color has-link-color" style="font-size:14px;font-style:normal;font-weight:600"><?php esc_html_e('Cart','fse-book-store'); ?></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group --></div>
<!-- /wp:column -->

<!-- wp:column {"verticalAlignment":"center","width":"46%","className":"head-social"} -->
<div class="wp-block-column is-vertically-aligned-center head-social" style="flex-basis:46%"><!-- wp:group {"layout":{"type":"flex","flexWrap":"nowrap","justifyContent":"right"}} -->
<div class="wp-block-group"><!-- wp:group {"style":{"spacing":{"blockGap":"0","margin":{"top":"0","bottom":"0"}}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group" style="margin-top:0;margin-bottom:0"><!-- wp:paragraph {"style":{"elements":{"link":{"color":{"text":"var:preset|color|heading"}}},"typography":{"fontSize":"14px","fontStyle":"normal","fontWeight":"700"}},"textColor":"heading"} -->
<p class="has-heading-color has-text-color has-link-color" style="font-size:14px;font-style:normal;font-weight:700"><?php esc_html_e('Connect With Us-','fse-book-store'); ?></p>
<!-- /wp:paragraph -->

<!-- wp:social-links {"iconColor":"primary","iconColorValue":"#FF9439","size":"has-normal-icon-size","className":"is-style-logos-only","style":{"spacing":{"blockGap":{"left":"var:preset|spacing|30"}}}} -->
<ul class="wp-block-social-links has-normal-icon-size has-icon-color is-style-logos-only"><!-- wp:social-link {"url":"#","service":"linkedin"} /-->

<!-- wp:social-link {"url":"#","service":"x"} /-->

<!-- wp:social-link {"url":"#","service":"facebook"} /-->

<!-- wp:social-link {"url":"#","service":"instagram"} /-->

<!-- wp:social-link {"url":"#","service":"youtube"} /--></ul>
<!-- /wp:social-links --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:column --></div>
<!-- /wp:columns --></div>
<!-- /wp:column --></div>
<!-- /wp:columns --></div>
<!-- /wp:group -->

<!-- wp:group {"className":"lower-header","style":{"spacing":{"padding":{"top":"var:preset|spacing|40","bottom":"var:preset|spacing|40"}}},"backgroundColor":"background","layout":{"type":"default"}} -->
<div class="wp-block-group lower-header has-background-background-color has-background" style="padding-top:var(--wp--preset--spacing--40);padding-bottom:var(--wp--preset--spacing--40)"><!-- wp:columns {"verticalAlignment":"center"} -->
<div class="wp-block-columns are-vertically-aligned-center"><!-- wp:column {"verticalAlignment":"center","width":"60%","className":"head-nav"} -->
<div class="wp-block-column is-vertically-aligned-center head-nav" style="flex-basis:60%"><!-- wp:navigation {"metadata":{"ignoredHookedBlocks":["woocommerce/customer-account","woocommerce/mini-cart"]},"layout":{"type":"flex","justifyContent":"left"}} -->
<!-- wp:navigation-link {"label":"Home","type":"","url":"#","kind":"custom","isTopLevelLink":true} /-->

<!-- wp:navigation-link {"label":"About Us","type":"","url":"#","kind":"custom","isTopLevelLink":true} /-->

<!-- wp:navigation-link {"label":"Shop","type":"","url":"#","kind":"custom","isTopLevelLink":true} /-->

<!-- wp:navigation-link {"label":"Page","type":"","url":"#","kind":"custom","isTopLevelLink":true} /-->

<!-- wp:navigation-link {"label":"Contact Us","type":"","url":"#","kind":"custom","isTopLevelLink":true} /-->
<!-- /wp:navigation --></div>
<!-- /wp:column -->

<!-- wp:column {"verticalAlignment":"center","width":"25%","className":"head-search"} -->
<div class="wp-block-column is-vertically-aligned-center head-search" style="flex-basis:25%"><!-- wp:search {"label":"Search","showLabel":false,"placeholder":"Search","buttonText":"Search","buttonPosition":"button-inside","buttonUseIcon":true,"query":{"post_type":"product"}} /--></div>
<!-- /wp:column -->

<!-- wp:column {"verticalAlignment":"center","width":"15%","className":"head-acount"} -->
<div class="wp-block-column is-vertically-aligned-center head-acount" style="flex-basis:15%"><!-- wp:group {"className":"acount-iner","style":{"spacing":{"padding":{"left":"25px","right":"25px","top":"10px","bottom":"10px"}},"border":{"radius":"30px"}},"backgroundColor":"primary","layout":{"type":"constrained"}} -->
<div class="wp-block-group acount-iner has-primary-background-color has-background" style="border-radius:30px;padding-top:10px;padding-right:25px;padding-bottom:10px;padding-left:25px">
<?php if ( class_exists( 'WooCommerce' ) ) { ?>
    <!-- wp:woocommerce/customer-account {"iconClass":"wc-block-customer-account__account-icon","textColor":"white","style":{"spacing":{"padding":{"right":"0","left":"0","top":"0","bottom":"0"}},"elements":{"link":{"color":{"text":"var:preset|color|white"}}}}} /-->
<?php } else { ?> 
    <!-- wp:paragraph {"style":{"elements":{"link":{"color":{"text":"var:preset|color|white"}}},"typography":{"fontSize":"15px","fontStyle":"normal","fontWeight":"500"}},"textColor":"white"} --><p class="has-white-color has-text-color has-link-color" style="font-size:15px;font-style:normal;font-weight:500"><?php esc_html_e('Login/Register','fse-book-store'); ?></p><!-- /wp:paragraph --> 
<?php } ?>
</div>
<!-- /wp:group --></div>
<!-- /wp:column --></div>
<!-- /wp:columns --></div>
<!-- /wp:group -->