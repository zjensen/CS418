var express = require('express');
var app = express();
var fileUpload = require('express-fileupload');
var PORT = 80;

app.use(fileUpload());
 
app.post('/upload', function(req, res) {
	var sampleFile;
 
	if (!req.files) {
		res.send('No files were uploaded.');
		return;
	}
 
	sampleFile = req.files.sampleFile;
	sampleFile.mv(__dirname + '/upload.fasta.txt', function(err) {
		if (err) {
			res.status(500).send(err);
		}
		else {
			res.send('File uploaded!');
		}
	});
});

app.get('/', function (req, res) {
	res.sendFile( __dirname + '/index.html');
});

app.listen(PORT, function () {
	console.log('Example app listening on port ' + PORT);
});