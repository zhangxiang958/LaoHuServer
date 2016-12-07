var express = require('express');
var router = express.Router();
var Proxy = require('../proxy');


router.get('/', function(req, res, next){
	Proxy.comment.getAllComment(function(err, vals){
		if(err) {
			res.send({
				err: err
			})
		} else {
			res.send(vals);
		}
	});
});

module.exports = router;