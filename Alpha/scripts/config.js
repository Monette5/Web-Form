// This file holds global app config variables.

// Set the environment variables based on the url.
var windowLocationOrigin = document.location.protocol + '//' + document.location.host;
// Set global app config vars.
window.appVars = {
  name : 'Monette Broken',
  local_env : 'http://localhost:8000' // The URL for your local environment.
};
// appSettings global variable - to set up all proxy calls.
// - added to window to counter issues experienced in IE.
window.appSettings = {
  api_key: $("api_Key"),
  source_type: "connection",
  con_id: $('cid'),
  key: $('pds_Key'),
  PROXY_PDS_CREATE: 'proxy-pds-create.php',
  dataset: $('data_set')
};