<?php
 //Require application bootstrap
//require __DIR__ . '/bootstrap/app.php';
//include 'config.php';
//include 'settings.php';
// Run Slim
session_start();

//if($debug != '0') {
//  syslog(LOG_INFO,"session: " . print_r($_SESSION,true));
//}
//$app->run(); 
?>

<!DOCTYPE html>

<head>

  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  
  <link href="https://fonts.googleapis.com/css?family=Dosis:400,700" rel="stylesheet">
  <link href="css/style.css" rel="stylesheet">
  <link href="css/bootstrap.min.css" rel="stylesheet">
  <script src="scripts/jquery-2.2.0.min.js"></script>
  <script src="scripts/bootstrap.min.js"></script>
</head>
<body>
 <div class='banner'>
       <h1>Developer Endpoint Functions</h1>
 </div>
<div class="container">
        <div class="row">
        <div class="col-md-8">
          <h3>Output</h3>
          <table id="infoTable" class="table table-striped hidden-on-load" >
      <thead>
               <th class="table-column-title">Field</th>
               <th class="table-column-title">Value</th>
              </thead>

              <tbody id="table-data"></tbody>
          </table>
        </div>
      </div>
    </div>
    <script src="scripts/index.js"></script>
    
    </body>
    </html>