var db = require("../models/database.js");

exports.getAllTeam = function(accounts, callback){
	var sql = "select * from knowledge.team";
	console.log(sql);
	db.query(sql, function(err, vals, fields){
		// console.log(vals);
		// console.log(vals[0].password);
		// console.log(fields);
		callback(err, vals, fields);
	}); 
}