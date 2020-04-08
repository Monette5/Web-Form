<?php

/**
 * Mydex specific configuration settings
 * Includes API end points
 */

 // Set up the environment variables depending on envrionement.

 if ($_SERVER['HTTP_HOST'] == 'wag.mydex.org'){
    define('MYDEX_IDP_PATH', 'https://idp.mydexid.org/');
    define('HOST_NAME', 'https://'.$_SERVER['HTTP_HOST']);

}else if ($_SERVER['HTTP_HOST'] == 'wag.local'){
    define('MYDEX_IDP_PATH', 'http://api-idp.local.mixcic.eu:8080/');
    define('HOST_NAME', 'http://'.$_SERVER['HTTP_HOST']);
}
else{
    define('MYDEX_IDP_PATH', 'https://sbx-idp.mydexid.org/');
    define('HOST_NAME', 'https://'.$_SERVER['HTTP_HOST']);
}


// Mydex platform specific paths.
define('MYDEX_API_PATH', 'https://sbx-api.mydex.org/');
define('MYDEX_DEV_PATH', 'https://dev.mydex.org');
define('MYDEX_PDS_PATH', 'https://sbx.mydex.org');

// Plain text variables.
define('GLOBAL_TXT_TERMS_DEFAULT', 'Click here to accept the Mydex Terms of Service.');
define('GLOBAL_TXT_TERMS_SELECT', 'Thank you, you have accepted the Mydex Terms of Service.');
define('GLOBAL_TXT_TERMS_LINK', 'Read the Mydex Terms of Service here.');

