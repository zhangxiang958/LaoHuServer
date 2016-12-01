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