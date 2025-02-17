<?php
/**
 * The base configuration for WordPress
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'pondshop' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 * Change these to different unique phrases!
 */
define( 'AUTH_KEY',         'oyW&n9INX1~-5qj6FwdS2uX=CG*v.1S{>Qd052s [3pGc}&5W= &,NK.;J?KvNel' );
define( 'SECURE_AUTH_KEY',  '9Cdb,hcGF/Ad03_-XD):}_v]r-Zons#{F[4i!&SA|u5}AJ~SkG$i4_h#OsWtCW^C' );
define( 'LOGGED_IN_KEY',    'N`E?@.k&>^ 2L0qo?g*~P%]$9JNhE8O2#ztyx/PE`cz6j^WIBWeY28WJ0:(f CaI' );
define( 'NONCE_KEY',        'Bjw,!-#w=C#730xizyp:)4PX3i=K6e(im[AH@/G2fVa;W40#/z81K@EmpYc&;G [' );
define( 'AUTH_SALT',        'iMIy>27!#_j&HLf}3* H=V.u_z=S6-u{`1*sxCPtSwn{_#Q/*+v*WP&-4jJr U>?' );
define( 'SECURE_AUTH_SALT', '0(E4M/ysC@VJ,pzY5kowO8BVH$/bR$^x.pzni>lD?,CH<vNJ3ac=(X]Lz!rVDk,^' );
define( 'LOGGED_IN_SALT',   '?|hUv`6r;s|z/l./Ur;{Ov5v [7T<`Ljc8!]Or!mm,},/-JLG6v|J-J%8x0J`NBk' );
define( 'NONCE_SALT',       'ZUO6Pbbk}7X7 `b-!X>y+g`>IOdd?]O4Zj3Ea[E$n@CAvV!oSDo91`cw@$T1@>#{' );

/**#@-*/

/**
 * WordPress database table prefix.
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 * Enable debugging and logging for development purposes.
 */
define( 'WP_DEBUG', true );
define( 'WP_DEBUG_LOG', true );
define( 'WP_DEBUG_DISPLAY', true );

/**
 * Enable Theme Editor
 * This allows editing theme files directly from the dashboard.
 */
define( 'DISALLOW_FILE_EDIT', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
    define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
