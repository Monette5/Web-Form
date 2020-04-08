<?php

$user_id = '3204';

$instance[0] = 0;


$data = array();

$data['ds_browsing_history']['browsing_history_url'] = 'http://www.youtube.com';
$data['ds_browsing_history']['browsing_history_title'] = 'YouTube';
$data['ds_browsing_history']['browsing_history_visit_date'] = '1397550510';


$data = (is_array($data)) ? http_build_query($data) : $data;

$arguments_transactional_array = array(
//   'uid=' . $user_id,
  'api_key=yGVrH98xNyMeIIIp0qiNsmvqJSMmDDFf',
  'source_type=connection',
  'con_id=3204-1545',
  'key=qL5GVXRWzXANqwHhtbHQwkgzHZspDqK4',
  'instance=' . $instance[0],
  'dataset=ds_browsing_history',
);
$arguments_transactional = implode('&', $arguments_transactional_array);

$mydex_api_url = "https://sbx-api.mydex.org/api/pds/transaction/$user_id.json?" . $arguments_transactional;

$ch = curl_init();
// set URL and other appropriate options
$options = array(CURLOPT_URL => "https://sbx-api.mydex.org/api/pds/transaction/$user_id.json?". $arguments_transactional,
                 CURLOPT_HEADER => false
                );

curl_setopt_array($ch, $options);

// grab URL and pass it to the browser
curl_exec($ch);
curl_setopt($ch, CURLOPT_URL, $mydex_api_url);
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-type: application/json'));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);

$mydex_request = curl_exec($ch);
$mydex_request_decode = json_decode($mydex_request);

curl_close($ch);

?>