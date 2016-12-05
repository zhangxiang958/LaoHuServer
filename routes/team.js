var express = require('express');
var router = express.Router();
var Proxy = require('../proxy');

router.get('/', function(req, res, next){
	Proxy.team.getAllTeam(function(err, vals){

		res.send(vals);
	});
});

module.exports = router;