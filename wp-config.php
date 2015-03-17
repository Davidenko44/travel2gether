<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, and ABSPATH. You can find more information by visiting
 * {@link http://codex.wordpress.org/Editing_wp-config.php Editing wp-config.php}
 * Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wordpress');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'j6Ca@`5hx+!F7uq$b|*L~yA%/aD23FB2-+nC=5{pialYx6_B[!u]vU!t&2%Ln/p7');
define('SECURE_AUTH_KEY',  'UU 4r+Mwu>08H#+Zd4g+k5RAkh!dzdjzrhDEp+v5F`sh$A<PDB|?:stz<52$a Na');
define('LOGGED_IN_KEY',    '+lCfxfTJ?=;.}D!VGkwTwnmdw4#>>$#0CQ+W 7|PE*E?](E wYCIW5_I,kO=<D6Y');
define('NONCE_KEY',        '[8OJ,i$Cp-XKSf0+#f+*,4VjX-*Z4TS.l#%cVj*#E%]cbWVNA~]JV-|nLR&ay8=U');
define('AUTH_SALT',        '9^rNNw4lG&n5ydd]S+cnW>Ev7%ia.Yb3q@;kx*zUen=^wy/LyO+rC9|1X_X-m9v-');
define('SECURE_AUTH_SALT', 'DqQK1gobTB][KiY<sKQk+JjX}>5t=bjhL61xqtulOOUxx#<h~D]QLSY1|YF|idKP');
define('LOGGED_IN_SALT',   'H=cJ0(D3ne`|Y3d{hIj3KqYJ><8p~/dM} 7;7[4xI?`CoL(n3`%J|ram%;vG!8V*');
define('NONCE_SALT',       '/YmA}>nX_HMu)4LTnf&OU.^]V*MUFm6Nk;.QhM`%yi9nxkd]0Mp(l?[GFcK*bL+d');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
