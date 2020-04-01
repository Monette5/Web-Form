$(document).ready(function () {

  
  $("form").submit(function(e) {
    e.preventDefault();
  });
  
  $("form").submit(function() {

    $("#table-data").html(""); // Clears table data

    var inf = {};
    var uid = $('input[name="uid"]').val();
   
    var pds_key = $('input[name="pds_key"]').val();
   
    var api_key = $('input[name="api_key"]').val();
  
    var cid = $('input[name="cid"]').val();
 
    var data_set = $('input[name="data_set"]').val();

    //Possible future use to add example data
/*     if (uid && api_key && pds_key && cid
       && data_set) {
      $(this).serializeArray().map(function(data) {
        inf[data.uid] = data.value;
      });

    var lastEntry = info[Object.keys(info).sort().pop()];
    inf.id = lastEntry.id + 1;
    info.push(inf);
       }
 */    var conid = uid + "-" + cid;
    //info.forEach(function(inf, i) {
    var url = "https://sbx-api.mydex.org/api/pds/pds/" + uid + ".jsonp?key=" + pds_key + "&api_key=" + api_key + "&con_id=" + cid + "&source_type=connection&dataset=" + data_set;
    
    var ajax = "\n\t$.ajax({\n\t\turl:\"" + url + "\",\n\t\tdataType:\"jsonp\",\n\t\tcrossDomain:true,\n\t" + "}).done(function(response) { \n\t\t// Changed this in code\n\t\t// Handle response\n\t});";
      // addInfo(url);
     if (uid == "") {
      alert("Please enter the UID");
    } 
    else {
      $.ajax({
      
      url: url,
      dataType: "jsonp",
      crossDomain: true

    }).done(function (response) {
   
      if (response.hasOwnProperty("error "+ response.error)) {
        alert("error");
      }
      else {
        // Unpacks recieved JSON object and displays in the table.
        var received_data = response[data_set];
    
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
  //The following code is  for possible future use for persistent data and can be used to delete and update from the table, if the table wasn't cleared between uses.

  /* function editInfo(id) {
    info.forEach(function(inf, i) {
      if (inf.id == id) {
        $(".modal-body").empty().append(`
                  <form id="updateInfo" action="">
                      <label for="uid">uid</label>
                      <input class="form-control" type="text" name="uid" value="${inf.uid}"/>
                      <label for="pds_key">pds_key</label>
                      <input class="form-control" type="text" name="pds_key" value="${inf.pds_key}"/>
                      <label for="api_key">API pds_key</label>
                      <input class="form-control" type="text" name="api_key" value="${inf.api_key}"/>
                      <label for="cid">Con Id</label>
                      <input class="form-control" type="text" name="cid" value="${inf.cid}"/>
                      <label for="data_set">data_set</label>
                      <input class="form-control" type="text" name="data_set" value="${inf.data_set}"/>
              `);
        $(".modal-footer").empty().append(`
                      <button type="button" type="submit" class="btn btn-primary" onClick="updateInfo(${id})">Save changes</button>
                      <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                  </form>
              `);
      }
    });
  } 
 
  function deleteInfo(id) {
    var action = confirm("Are you sure you want to delete this item?");
    var msg = "Item deleted successfully!";
    info.forEach(function(inf, i) {
      if (inf.id == id && action != false) {
        info.splice(i, 1);
        $("#infoTable #inf-" + inf.id).remove();
        flashMessage(msg);
      }
    });
  }
  
  function updateInfo(id) {
    var msg = "Info updated successfully!";
    var inf = {};
    inf.id = id;
    info.forEach(function(inf, i) {
      if (inf.id == id) {
        $("#updateInfo").children("input").each(function() {
          var value = $(this).val();
          var attr = $(this).attr("uid");
          if (attr == "uid") {
            inf.uid = value;
          } else if (attr == "pds_key") {
            inf.pds_key = value;
          } else if (attr == "api_key") {
            inf.api_key = value;
          }
      else if (attr == "cid") {
        inf.cid = value;
      }
   else if (attr == "data_set") {
    inf.data_set = value;
  }
        });
        info.splice(i, 1);
        info.splice(inf.id - 1, 0, inf);
        $("#infoTable #inf-" + inf.id).children(".infoData").each(function() {
          var attr = $(this).attr("uid");
          if (attr == "uid") {
            $(this).text(inf.uid);
          } else if (attr == "pds_key") {
            $(this).text(inf.pds_key);
          }
         else if (attr == "api_key") {
          $(this).text(inf.api_key);
        }
        else if (attr == "cid") {
         $(this).text(inf.api_key);
        }
       else if (attr == "data_set") {
       $(this).text(inf.data_set);
      }

        });
        $(".modal").modal("toggle");
        flashMessage(msg);
      }
    });
  }
  
  function flashMessage(msg) {
    $(".flashMsg").remove();
    $(".row").prepend(`
          <div class="col-sm-12"><div class="flashMsg alert alert-success alert-dismissible fade in" role="alert"> <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button> <strong>${msg}</strong></div></div>
      `);
  }
  
// Could add these buttons to the table to make changes
       /* '<tr><td align="center">
                  <button class="btn btn-success form-control" onClick="editInfo(${inf.id})" data-toggle="modal" data-target="#myModal")">Do Stuff</button>
              </td></tr>
              <tr><td align="center">
                  <button class="btn btn-danger form-control" onClick="deleteInfo(${inf.id})">Delete Stuff</button>
              </td></tr> */
});