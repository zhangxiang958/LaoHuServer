var db = require("../models/database.js");

exports.getAllUser = function(callback){
	var sql = "select * from knowledge.member";
	console.log(sql);
	db.query(sql, function(err, vals, fields){
		// console.log(vals);
		// console.log(vals[0].password);
		// console.log(fields);
		callback(err, vals, fields);
	}); 
}