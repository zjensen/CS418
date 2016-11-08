var express = require('express');
var app = express();
var PORT = 80;

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(PORT, function () {
  console.log('Example app listening on port ' + PORT);
});