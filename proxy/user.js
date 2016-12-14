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


exports.addUser = function(data, callback){

	var sql = "INSERT INTO knowledge.member(member_name, sex, avatar, team_id, position, grade, academy, major, class, email, tele, wechat, QQ, job, location) VALUES (" +
				"'" + data.member_name + "'" + ", " +
				"'" + data.sex + "'" + ", " +
				"'" + data.avatar + "'" + ", " +
				"'" + data.team_id + "'" + ", " +
				"'" + data.position + "'" + ", " +
				"'" + data.grade + "'" + ", " +
				"'" + data.academy + "'" + ", " +
				"'" + data.major + "'" + ", " +
				"'" + data.class + "'" + ", " +
				"'" + data.email + "'" + ", " +
				"'" + data.tele + "'" + ", " +
				"'" + data.wechat + "'" + ", " +
				"'" + data.QQ + "'" + ", " +
				"'" + data.job + "'" + ", " +
				"'" + data.location + "'" + ")";


	console.log(sql);
	db.query(sql, function(err, vals, fields){
		console.log(err);
		
		callback(err, vals, fields);
	})
}

exports.editUser = function(id, data, callback){
	var sql = 'update knowledge.member ' +
			  'set member_name=' +  db.pool.escape(data.member_name) + ", " 
			  + 'sex=' + db.pool.escape(data.sex) + ", " 
			  + 'avatar=' + db.pool.escape(data.avatar) + ", " 
			  + 'team_id=' + db.pool.escape(data.team_id) + ", " 
			  + 'position=' + db.pool.escape(data.position) + ", " 
			  + 'grade=' + db.pool.escape(data.grade) + ", " 
			  + 'academy=' + db.pool.escape(data.academy) + ", "
			  + 'major=' + db.pool.escape(data.major) + ", "
			  + 'class=' + db.pool.escape(data.class) + ", "
			  + 'email=' + db.pool.escape(data.email) + ", "
			  + 'tele=' + db.pool.escape(data.tele) + ", "
			  + 'wechat=' + db.pool.escape(data.wechat) + ", "
			  + 'QQ=' + db.pool.escape(data.QQ) + ", "
			  + 'job=' + db.pool.escape(data.job) + ", "
			  + 'location=' + db.pool.escape(data.location) +
			  ' where member_id=' + db.pool.escape(id);
	console.log(sql);

	db.query(sql, function(err, vals, fields){
		console.log(vals);

		callback(err, vals, fields);
	});
}

exports.deleteUser = function(req, res, next){
	var sql = 'DELETE FROM knowledge.member WHERE member_id=' + db.pool.escape(id);

	db.query(sql, function(err, vals, fields){
		console.log(vals);

		callback(err, vals, fields);
	});
}