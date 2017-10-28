var express = require('express');
var router = express.Router();

var welcome = require('./hello.js');

router.get('/', function(req, res){
	res.send("api is called");
});

router.use('/hello', welcome );

module.exports = router;