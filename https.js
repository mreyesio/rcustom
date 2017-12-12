var express = require('express');
var https = require('https');
var http = require('http');
var fs = require('fs');
var app = express();

var options = {
  key: fs.readFileSync('/etc/letsencrypt/live/rcustombuilders.com/fullchain.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/rcustombuilders.com/privkey.pem')
};

http.createServer(app).listen(80);
https.createServer(options, app).listen(443);