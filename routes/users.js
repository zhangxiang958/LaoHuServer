var express = require('express');
var router = express.Router();
var Proxy = require('../proxy');

/* GET users listing. */
router.get('/', function(req, res, next) {
	Proxy.user.getAllUser(function(err, vals){

		res.send(vals);
	});
});

module.exports = router;
