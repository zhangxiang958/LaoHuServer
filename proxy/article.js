var db = require("../models/database.js");

exports.getAllArticle = function(callback){
	var sql = 'select * from knowledge.article';

	db.query(sql, function(err, vals, fields){
		
		callback(err, vals, fields);
	});
}

exports.editAticle = function(id, data, callback){
	var sql = 'update knowledge.article ' +
			  'set title=' +  db.pool.escape(data.title) + ", " 
			  + 'author=' + db.pool.escape(data.author) + ", " 
			  + 'publish_time=' + db.pool.escape(data.publish_time) + ", " 
			  + 'link=' + db.pool.escape(data.link) + ", " 
			  + 'summary=' + db.pool.escape(data.summary) + ", " 
			  + 'article_body=' + db.pool.escape(data.article_body) + ", " 
			  + 'pageView=' + db.pool.escape(data.pageView) + ", "
			  + 'praise=' + db.pool.escape(data.praise) +
			  ' where article_id=' + db.pool.escape(id);
	console.log(sql);

	db.query(sql, function(err, vals, fields){
		console.log(vals);

		callback(err, vals, fields);
	});
}

exports.deleteArticle = function(id, callback){
	var sql = 'DELETE FROM knowledge.article WHERE article_id=' + db.pool.escape(id);

	db.query(sql, function(err, vals, fields){
		console.log(vals);

		callback(err, vals, fields);
	});
}