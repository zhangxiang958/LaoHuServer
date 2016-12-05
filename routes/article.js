var express = require('express');
var router = express.Router();
var Proxy = require('../proxy');

router.get('/', function(req, res, next){
	Proxy.article.getAllArticle(function(err, vals){
		console.log(vals)
		res.send(vals);
	});
});

module.exports = router;