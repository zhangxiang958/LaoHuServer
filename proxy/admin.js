var db = require("../models/database.js");

exports.adminLogin = function(accounts, callback){
	var sql = "select * from knowledge.admin where accounts=" + db.pool.escape(accounts);
	console.log(sql);
	db.query(sql, function(err, vals, fields){
		// console.log(vals);
		// console.log(vals[0].password);
		// console.log(fields);
		callback(err, vals, fields);
	}); 
}

exports.getAllAdmin = function(callback){
	var sql = "select * from knowledge.admin";

	db.query(sql, function(err, vals, fields){
		callback(err, vals, fields);
	});
}

exports.editAdmin = function(id, data, callback){
	// var sql = 'select * from knowledge.admin where admin_id=' + db.pool.escape(id);

	var sql = 'update knowledge.admin ' +
			  'set accounts=' +  db.pool.escape(data.accounts) + ", " 
			  + 'password=' + db.pool.escape(data.password) +
			  ' where admin_id=' + db.pool.escape(id);
	console.log(sql);

	db.query(sql, function(err, vals, fields){
		console.log(vals);

		callback(err, vals, fields);
	});
}