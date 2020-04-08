var info = [
    {
      id: 1,
      uid: "uid",
      pds_key: "pds_key",
      api_key: "api_key",
      cid: "cid",
     data_set: "data_set"
    },
    {
      id: 2,
      uid: "uid1",
      pds_key: "Key1",
      api_key: "apiKey1",
      cid: "cid1",
      data_set: "dataset1"
    },
    {
      id: 3,
      uid: "uid2",
      pds_key: "Key2",
      api_key: "apiKey2",
      cid: "cid2",
      data_set: "dataset2"
    }
  ];
  
  $.each(info, function(i, inf) {
    appendToInfoTable(inf);
  });
  
  $("form").submit(function(e) {
    e.preventDefault();
  });
  
  $("form#addInfo").submit(function() {
    var inf = {};
    var uidInput = $('input[name="uid"]').val().trim();
    var pds_keyInput = $('input[name="pds_key"]').val().trim();
    var api_keyInput = $('input[name="api_key"]').val().trim();
    var cidInput = $('input[name="cid"]').val().trim();
    var data_setInput = $('input[name="data_set"]').val().trim();
    if (uidInput && api_keyInput && paramaterInput && pds_keyInput && cidInput
       && source_typeInput && data_setInput) {
      $(this).serializeArray().map(function(data) {
        inf[data.uid] = data.value;
      });
      var lastEntry = info[Object.keys(info).sort().pop()];
      inf.id = lastEntry.id + 1;
  
      addInfo(inf);
    } else {
      alert("All fields must have a valid value.");
    }
  });
  
  function addInfo(inf) {
    info.push(inf);
    appendToInfoTable(inf);
  }
  
  function editInfo(id) {
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
  
  function appendToInfoTable(inf) {
    $("#infoTable > tbody:last-child").append(`
          <tr id="inf-${inf.id}">
              <td class="infoData" uid="uid">${inf.uid}</td>
              '<td class="infoData" name="pds_key">${inf.pds_key}</td>
              '<td class="infoData" name="api_key">${inf.api_key}</td>
              '<td class="userData" name="cid">${inf.cid}</td>
              '<td class="userData" name="datatset">${inf.datatset}</td>   
              </tr> 
         
          
      `);
  }
       /* '<tr><td align="center">
                  <button class="btn btn-success form-control" onClick="editInfo(${inf.id})" data-toggle="modal" data-target="#myModal")">Do Stuff</button>
              </td></tr>
              <tr><td align="center">
                  <button class="btn btn-danger form-control" onClick="deleteInfo(${inf.id})">Delete Stuff</button>
              </td></tr> */