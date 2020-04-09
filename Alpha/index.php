<?php
 //Require application bootstrap
//require __DIR__ . '/bootstrap/app.php';
//include 'config.php';
//include 'settings.php';
// Run Slim
session_start();

if(isset($_POST['submit'])){

  //  To redirect form on a particular page
  header("Location: /?status=success");
  }

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
    <form class="form-row" action="proxy-pds.php" method="post" id="getdata">
      <div class="row">
        <div class="col-md-6">
          <h3>Enter Information</h3>
            <div class="form-group">
              <label for="uid">UID</label>
              <input class="form-control" type="text" id="uid" name="uid" placeholder="UID" required>
            </div>
            <div class="form-group">
              <label for="pds_key">Connection Key</label>
              <input class="form-control" type="text" id="key" name="key" placeholder="PDS Key" required>
            </div>
            <div class="form-group">
              <label for="api_Key">API Key</label>
              <input class="form-control" type="text" id="api_key" name="api_key" placeholder="API Key" required>
            </div>
            <div class="form-group">
              <label for="con_id">Connection ID</label>
              <input class="form-control" type="text" id="con_id" name="con_id" placeholder="Con Id" required>
            </div>
            <div class="form-group">
              <label for="dataset">Dataset</label>
              <input class="form-control" type="text" id="dataset" name="dataset" placeholder="Dataset" required>
            </div>
            <input type="hidden" id="form_submitted" name="form_submitted" value="1" />
            <button class="btn form-control" type="submit">SUBMIT</button>
          </form>
        </div>
 
   
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

