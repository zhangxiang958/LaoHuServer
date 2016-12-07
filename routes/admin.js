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

module.exports = router;