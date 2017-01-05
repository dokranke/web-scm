/*
 * Converts a compressed byte-string into nbt
 */

function toNBT_sjmulder(src, callback) {
  nbt.parse(stringToArrayBuffer(decoded), function(error, data) {
      if (error) $('#inv_gist').show();
      callback(data);
  });
}

function toNBT_iRath(src) {
	//return nbt;
}
