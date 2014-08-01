var fs = require('fs');

var cake = process.argv[2];
var pie = fs.readFileSync(cake);
var str = pie.toString();
var splits = str.split('\n');
// console.log(splits)
console.log(splits.length - 1);