var express = require('express');
var router = express.Router();
var Proxy = require('../proxy');

router.get('/', function(req, res, next){
	Proxy.article.getAllArticle(function(err, vals){
		console.log(vals)
		res.send(vals);
	});
});

router.put('/editArticle/:articleId', function(req, res, next){
	var id 		= req.params.articleId;

	var data 	= {
		title: req.body.title,
		author: req.body.author,
		publish_time: req.body.publish_time.split("T")[0],
		link: req.body.link,
		summary: req.body.summary,
		article_body: req.body.article_body,
		pageView: req.body.pageView,
		praise: req.body.praise
	};

	console.log(id);
	console.log(data);
	Proxy.article.editAticle(id, data, function(err, vals){
		if(err) {
			res.send({
				code: 1,
				msg: err
			});
		} else {
			res.send({
				code: 0,
				msg: "success"
			});
		}
	});
});


router.delete('/deleteArticle/:articleId', function(req, res, next){
	var id = req.params.articleId;

	Proxy.article.deleteArticle(id, function(err, vals){
		if(err) {
			res.send({
				code: 1,
				msg: err
			});
		} else {
			res.send({
				code: 0,
				msg: "success"
			});
		}
	});

	 
});

module.exports = router;