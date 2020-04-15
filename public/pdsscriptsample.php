<?php

$user_id = '345';

$instance[0] = 0;

$data = array();

$data['ds_browsing_history']['browsing_history_url'] = 'http://www.youtube.com';
$data['ds_browsing_history']['browsing_history_title'] = 'YouTube';
$data['ds_browsing_history']['browsing_history_visit_date'] = '1397550510';


$data = (is_array($data)) ? http_build_query($data) : $data;

$arguments_transactional_array = array(
//   'uid=' . $user_id,
  'api_key=jPssYUMVVNaLaYPIbY7P9ESGzdksCOlf',
  'source_type=connection',
  'con_id=345-1545',
  'key=5FXfidz9zw6YQaO2kWh0B154zz6wafrV',
  'instance=' . $instance[0],
  'dataset=ds_browsing_history',
);
$arguments_transactional = implode('&', $arguments_transactional_array);

$mydex_api_url = "https://sbx-api.mydex.org/api/pds/transaction/" . $user_id . ".json?" . $arguments_transactional;

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

?>