<?php

$postdata_raw = file_get_contents("php://input"); 
$postdata = json_decode($postdata_raw);
$instance[0] = 0;

$data = array();

$data['ds_browsing_history']['browsing_history_url'] = 'http://www.youtube.com';
$data['ds_browsing_history']['browsing_history_title'] = 'YouTube';
$data['ds_browsing_history']['browsing_history_visit_date'] = '1397550510';


$data = (is_array($data)) ? http_build_query($data) : $data;


$uid = $_POST['uid'];
$key = $_POST['key'];
$api_key = $_POST['api_key'];
$source_type = 'connection';  
$con_id = $_POST['con_id'];
$dataset = $_POST['dataset'];
$arguments_transactional_array = array(
   'api_key=' . $api_key . '',
   'source_type=connection',  
   'con_id=' . $con_id . '',
   'key=' . $key . '',
   'instance=' . $instance[0] . '',
   'dataset=ds_browsing_history',
   ); 

$arguments_transactional = implode('&', $arguments_transactional_array);

$mydex_api_url = "https://sbx-api.mydex.org/api/pds/transaction/" . $uid . '.json?' . $arguments_transactional;

$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, $mydex_api_url);
curl_setopt($ch, CURLOPT_HTTPHEADER, 0);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PUT');
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);

$mydex_request = curl_exec($ch);
$mydex_request_decode = json_decode($mydex_request);

curl_close($ch);

$response = curl_exec($ch);
curl_close($ch);
$ar = json_decode($response);

?>