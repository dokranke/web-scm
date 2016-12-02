/*
 * Compressing and decompressing of a nbt-web id
 */

this.fromID = function(id) {
	//return data;
}

this.toID = function(data) {
  var id = btoa(JSON.stringify(data));
	return id;
}
