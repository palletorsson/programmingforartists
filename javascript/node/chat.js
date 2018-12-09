var util = require('util');
var fs = require('fs');

var markov = require('markov');
var m = markov(1);

var s = fs.createReadStream(__dirname + 'yayfiles.txt');
console.log(s); 
m.seed(s, function () {
    var stdin = process.openStdin();
    util.print('> ');
    
    stdin.on('data', function (line) {
    	console.log(line.toString()); 
        var res = m.respond(line.toString());
        console.log(res);
        util.print('> ');
    });
});