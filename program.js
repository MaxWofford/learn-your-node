var fs = require('fs');
var pathToFile = process.argv[2];
var bufferString, bufferStringSplit;
	fs.readFile(pathToFile, function (err, data) {
		bufferStringLength = data.toString().split('\n').length - 1;
		console.log(bufferStringLength)
	});