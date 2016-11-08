var express = require('express');
var app = express();
var PORT = 80;

app.get('/', function (req, res) {
	res.sendFile( __dirname + '/index.html');
});

app.listen(PORT, function () {
	console.log('Example app listening on port ' + PORT);
});