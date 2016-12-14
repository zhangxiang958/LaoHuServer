var express = require('express');
var router = express.Router();
var Proxy = require('../proxy');

/* GET users listing. */
router.get('/', function(req, res, next) {
	Proxy.user.getAllUser(function(err, vals){

		res.send(vals);
	});
});


router.post('/addUser', function(req, res, next){
	var data = {
		member_name: req.body.member_name,
		sex: req.body.sex,
		avatar: req.body.avatar,
		team_id: req.body.team_id,
		position: req.body.position,
		grade: req.body.grade,
		academy: req.body.academy,
		major: req.body.major,
		class: req.body.class,
		email: req.body.email,
		tele: req.body.tele,
		wechat: req.body.wechat,
		QQ: req.body.QQ,
		job: req.body.job,
		location: req.body.location
	};
	

	console.log(data);

	Proxy.user.addUser(data, function(err, vals){
		if(err){
			res.send({
				code: 1, 
				msg: err
			})
		} else {
			res.send({
				code: 0,
				msg: "success"
			});
		}
	});
});

router.put('/editUser/:userId', function(req, res, next){
	var id 		= req.params.userId; 
	var data = {
		member_name: req.body.member_name,
		sex: req.body.sex,
		avatar: req.body.avatar,
		team_id: req.body.team_id,
		position: req.body.position,
		grade: req.body.grade,
		academy: req.body.academy,
		major: req.body.major,
		class: req.body.class,
		email: req.body.email,
		tele: req.body.tele,
		wechat: req.body.wechat,
		QQ: req.body.QQ,
		job: req.body.job,
		location: req.body.location
	}

	console.log(id);
	console.log(data);
	Proxy.user.editUser(id, data, function(err, vals){
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

router.delete('/deleteUser/:userId', function(req, res, next){
	var id = req.params.userId;

	Proxy.user.deleteUser(id, function(err, vals){
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
