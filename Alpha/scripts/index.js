
$("form#getdata").submit(function() {

 var url = "https://sbx-api.mydex.org/api/pds/pds/" + $('uid') + ".jsonp?key=" + $('key') + "&api_key=" + $('api_key') + "&con_id=" + $('con_id') + "&source_type=connection&dataset=" + $('dataset');
    // Call the proxy php file to avoid cross-domain api issues.
    $.ajax({
      'url' : url,
      'contentType' : 'application/json',
      'dataType' : 'jsonP',
    }).done(function (response) {
   
      if (response.hasOwnProperty("error "+ response.error)) {
        alert("error");
      }
      else {
        // Unpacks recieved JSON object and displays in the table.
        var received_data = response[dataset];
    console.log(received_data);
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
});