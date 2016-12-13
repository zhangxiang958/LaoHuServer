var express = require('express');
var router = express.Router();
var Proxy = require('../proxy');
var md5 = require('md5');

/* GET users listing. */
router.post('/', function(req, res, next) {
	var accounts = req.body.accounts;
	console.log(accounts);
	console.log(req.body.accounts);
	Proxy.admin.adminLogin(accounts, function(err, vals){
		console.log(vals);
		if(err) {
			res.send({
				err: 'error in login'
			});
		} else {
			if(vals[0].password == req.body.password) {
				res.send(200, {
					code: 0,
					id: vals[0].admin_id,
					accounts: vals[0].accounts,
					msg: 'login success' 
				});
			} else {
				res.send(200, {
					code: 1,
					msg: 'login falid' 
				});
			}
		}
	});
});

router.get('/getAdmin', function(req, res, next){
	Proxy.admin.getAllAdmin(function(err, vals){
		if(err) {
			res.send({
				err: err
			});
		} else {
			res.send(vals);
		}
	});
});

router.put('/editAdmin/:adminId', function(req, res, next){
	var id 		= req.params.adminId; 
	var data = {
		accounts: req.body.accounts,
		password: req.body.password
	}

	console.log(id);
	console.log(data);
	Proxy.admin.editAdmin(id, data, function(err, vals){
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

router.delete('/deleteAdmin/:adminId', function(req, res, next){
	var id = req.params.adminId;

	Proxy.admin.deleteAdmin(id, function(err, vals){
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