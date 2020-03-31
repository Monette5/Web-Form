var info = [
    {
      id: 1,
      url: "url",
      key: "Key",
      apiKey: "apiKey",
      parameter: "parameter",
      con_id: "Con_id",
      source_type: "source_type",
      dataset: "dataset"
    },
    {
      id: 2,
      url: "url1",
      key: "Key1",
      apiKey: "apiKey1",
      parameter: "parameter1",
      con_id: "Con_id1",
      source_type: "source_type1",
      dataset: "dataset1"
    },
    {
      id: 3,
      url: "url2",
      key: "Key2",
      apiKey: "apiKey2",
      parameter: "parameter2",
      con_id: "Con_id2",
      source_type: "source_type2",
      dataset: "dataset2"
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
    var urlInput = $('input[name="url"]').val().trim();
    var keyInput = $('input[name="key"]').val().trim();
    var apiKeyInput = $('input[name="apiKey"]').val().trim();
    var paramaterInput = $('input[name="parameter"]').val().trim();
    var con_idInput = $('input[name="con_id"]').val().trim();
    var source_typeInput = $('input[name="source_type"]').val().trim();
    var datasetInput = $('input[name="dataset"]').val().trim();
    if (urlInput && apiKeyInput && paramaterInput && keyInput && con_idInput
       && source_typeInput && datasetInput) {
      $(this).serializeArray().map(function(data) {
        inf[data.url] = data.value;
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
                      <label for="url">URL</label>
                      <input class="form-control" type="text" name="url" value="${inf.url}"/>
                      <label for="key">Key</label>
                      <input class="form-control" type="text" name="key" value="${inf.key}"/>
                      <label for="apiKey">API Key</label>
                      <input class="form-control" type="text" name="apiKey" value="${inf.apiKey}"/>
                      <label for="parameter">Parameter</label>
                      <input class="form-control" type="text" name="parameter" value="${inf.parameter}"/>
                      <label for="con_id">Con Id</label>
                      <input class="form-control" type="text" name="con_id" value="${inf.con_id}"/>
                      <label for="source_type">Source Type</label>
                      <input class="form-control" type="text" name="source_type" value="${inf.source_type}"/>
                      <label for="dataset">Dataset</label>
                      <input class="form-control" type="text" name="dataset" value="${inf.dataset}"/>
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
          var attr = $(this).attr("url");
          if (attr == "url") {
            inf.url = value;
          } else if (attr == "key") {
            inf.key = value;
          } else if (attr == "apiKey") {
            inf.apiKey = value;
          }
         else if (attr == "parameter") {
          inf.parameter = value;
        }
      else if (attr == "con_id") {
        inf.con_id = value;
      }
     else if (attr == "source_type") {
      inf.source_type = value;
    }
   else if (attr == "dataset") {
    inf.dataset = value;
  }
        });
        info.splice(i, 1);
        info.splice(inf.id - 1, 0, inf);
        $("#infoTable #inf-" + inf.id).children(".infoData").each(function() {
          var attr = $(this).attr("url");
          if (attr == "url") {
            $(this).text(inf.url);
          } else if (attr == "key") {
            $(this).text(inf.key);
          }
         else if (attr == "apiKey") {
          $(this).text(inf.apiKey);
        }
        else if (attr == "con_id") {
         $(this).text(inf.apiKey);
        }
       else if (attr == "con_id") {
        $(this).text(inf.source_type);
        }
       else if (attr == "dataset") {
       $(this).text(inf.dataset);
      }
      else {
       $(this).text(inf.parameter);
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
              <td class="infoData" url="url">${inf.url}</td>
              '<td class="infoData" name="key">${inf.key}</td>
              '<td class="infoData" name="apiKey">${inf.apiKey}</td>
              '<td class="userData" name="parameter">${inf.parameter}</td>
              '<td class="userData" name="con_id">${inf.con_id}</td>
              '<td class="userData" name="source_type">${inf.source_type}</td>
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