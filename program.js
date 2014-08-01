var fs = require('fs');
var dir = process.argv[2];
var fileType = "." + process.argv[3];
fs.readdir(dir, function(err, list) {
	function isFileType(element) {
  		return element.indexOf(fileType) > -1
	}
	var filtered = list.filter(isFileType).toString().split(',');
	for (var i = 0; i <= (filtered.length - 1); i++) {
		console.log(filtered[i]);
	};
});
