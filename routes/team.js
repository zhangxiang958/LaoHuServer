var express = require('express');
var router = express.Router();
var Proxy = require('../proxy');

router.get('/', function(req, res, next){
	res.send('team');
});

module.exports = router;