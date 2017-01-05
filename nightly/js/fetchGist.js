/*
 * Fetch a anonymous gist from github
 */

var GIST_ERR = "ERR: Invaild gist";

function fetchGist(gurl, callback) {
  var url = "https://gist.githubusercontent.com/anonymous/" + gurl + "/raw";
  $("#content").load(url, function(responseText,status,xhr){
    if (status != "error") {
      var decoded = atob(responseText);
      callback(decoded);
    } else {
      callback(GIST_ERR);
    }
  });
}
