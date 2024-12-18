var fs = require('fs');

var infile = fs.createReadStream('./output.txt',{flag:'r'});
var outfile = fs.createWriteStream('./output2.txt',{flag:'w'});

infile.on