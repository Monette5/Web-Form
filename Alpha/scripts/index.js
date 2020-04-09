
$("#getdata").on('submit', function(e) {
  e.preventDefault(); //Prevents default submit
          var form = $(this); 
          var post_data = form.serialize(); //Serialized the form data for process.php
          
          $.ajax({
              type: 'POST',
              url: 'proxy-pds.php', // Your form script
              data: post_data,
                           
              }).done(function (response) {
   
                if (response.hasOwnProperty("error "+ response.error)) {
                  alert("error");
                }
                else {
                
                  var obj = JSON.parse(response);
                  var dataset = $('input[name="dataset"]').val();
                
                  var received_data = obj[dataset];
                
                  var fields = received_data.instance_0;
                  
                  for (var field in fields) {
                    var temp = fields[field];
                    var field_cleaned = string_cleaner(field);
                    $("#table-data").append("<tr><td>" + field_cleaned + " </td><td>"
                    + temp.value + "</td></tr>");
                  $("#infoTable").show();
                }
    }
    });


  });

  function string_cleaner(string) {

    string = (string.substring((string.search("_")+1),string.length));
    string = (string.substring((string.search("_")+1),string.length));
    string = string.replace("_"," ");
    var tempstr1 = string.substring(0,1);
    tempstr1 = tempstr1.toUpperCase();
    var tempstr2 = string.substring(1,string.length);
    string = tempstr1 + tempstr2;
    return(string);
  }


function string_cleaner(string) {

  string = (string.substring((string.search("_")+1),string.length));
  string = (string.substring((string.search("_")+1),string.length));
  string = string.replace("_"," ");
  var tempstr1 = string.substring(0,1);
  tempstr1 = tempstr1.toUpperCase();
  var tempstr2 = string.substring(1,string.length);
  string = tempstr1 + tempstr2;
  return(string);
}
