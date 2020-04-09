<?php
//include 'config.php';


//header('Content-Type: application/json');
//define('MYDEX_PDS_PATH', 'https://sbx.mydex.org/pds/pds');

//Read raw POST data and decode JSON
$postdata_raw = file_get_contents("php://input"); 
$postdata = json_decode($postdata_raw);


$instance[0] = 0;

$uid = $_POST['uid'];
$key = $_POST['key'];
$api_key = $_POST['api_key'];
$source_type = 'connection';  
$con_id = $_POST['con_id'];
$dataset = $_POST['dataset'];
 $auth_data = array(
   'key=' . $key . '',
   'api_key=' . $api_key . '',
   'source_type=connection',  
   'con_id=' . $con_id . '',
   'dataset='  . $dataset . ''
   ); 
/* $data = array();

$data['ds_browsing_history']['browsing_history_url'] = 'http://www.youtube.com';
$data['ds_browsing_history']['browsing_history_title'] = 'YouTube';
$data['ds_browsing_history']['browsing_history_visit_date'] = '1397550510';

*/
//$data = (is_array($data)) ? http_build_query($data) : $data; 

  /* $arguments_transactional_array = array(
  'uid=' $uid,
  'api_key=yGVrH98xNyMeIIIp0qiNsmvqJSMmDDFf',
  'source_type=connection',
  'con_id=3204-1545',
  'key=qL5GVXRWzXANqwHhtbHQwkgzHZspDqK4',
  'instance=' . $instance[0],
  'dataset=ds_browsing_history',
   );  */


$arguments_transactional = implode('&', $auth_data);

$mydex_api_url = "https://sbx-api.mydex.org/api/pds/pds/" . $uid . '.json?' . $arguments_transactional;

//echo $mydex_api_url;
$ch = curl_init($mydex_api_url);
// set URL and other appropriate options
/* $options = array(CURLOPT_URL => $mydex_api_url,
                 CURLOPT_HEADER => false
               );

curl_setopt_array($ch, $options); */

// grab URL and pass it to the browser
//curl_exec($ch);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
   $mydex_api_url, 'Content-Type: application/json'
]);
$response = curl_exec($ch);
curl_close($ch);
$ar = json_decode($response);
echo $response . PHP_EOL;
//curl_setopt($ch, CURLOPT_URL, $mydex_api_url);
/* curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-type: application/json'));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');
curl_setopt($ch, CURLOPT_POSTFIELDS, $data); */

//$mydex_request = curl_exec($ch);
//$mydex_request_decode = json_decode($mydex_request);

//curl_close($ch);

?>