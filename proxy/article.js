var db = require("../models/database.js");

exports.getAllArticle = function(callback){
	var sql = 'select * from knowledge.article';

	db.query(sql, function(err, vals, fields){
		
		callback(err, vals, fields);
	});
}