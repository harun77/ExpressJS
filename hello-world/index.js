var express = require('express');
var app = express();

var api = require('./api.js');

app.get('/',function(req, res){
	res.send("okay");
});

app.use('/api', api);

app.listen(3000,function(){
	console.log("Server is running at port 3000...")
});