var express = require('express');
var cors    = require('cors')
var app     = express();
app.use(cors())


var send_val = 0;

// for the get request coming from three.js
app.get('/', function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*'); // to get rid of cors problem
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ distvalue: send_val }));
});

app.listen('8081')

console.log('Magic happens on port 8081');
exports = module.exports = app;

// serial communication with arduino

var SerialPort = require('serialport');
var Readline = SerialPort.parsers.Readline;
var arduinoPort = "/dev/cu.usbmodem14311"; // you need to check the port number in the arduino ide

var serialPort = new SerialPort(arduinoPort, {
  baudRate: 9600
})

var parser = new Readline()
serialPort.pipe(parser)
parser.on('data', function (data) {
  send_val = data;
  console.log(send_val);
})

serialPort.on('open', function () {
  console.log('Communication is on!')
})
