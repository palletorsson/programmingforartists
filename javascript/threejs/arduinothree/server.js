var express = require('express');
var fs      = require('fs');
var cors = require('cors')
var app     = express();
app.use(cors())

app.get('/', function(req, res) {
    let number = Math.random();
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ distvalue: number }));
});

checkDistance = function() {
  console.log("checkDistance");
}

app.listen('8081')

console.log('Magic happens on port 8081');
exports = module.exports = app;
