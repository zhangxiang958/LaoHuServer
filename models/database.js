var mysql = require('mysql');

// var connection = mysql.createConnection({
// 	host: 'localhost',
// 	user: 'root',
// 	password: '123',
// 	database: 'nodejs',
// 	port: 3306
// });

// connection.connect(function(err){
// 	if(err) {
// 		console.log("error when connecting to db:" + err);
// 	} else {
// 		console.log("成功连接到  MySQL 数据库，3306 端口");
// 	}
// });


// module.exports = connection;

var pool = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: '123',
	database: 'nodejs',
	port: 3306
});

var query = function(sql, callback){
    pool.getConnection(function(err,conn){
        if(err){
        	console.log("error when connecting to db:" + err);
            callback(err,null,null);
        }else{
        	console.log("成功连接到  MySQL 数据库，3306 端口");

            conn.query(sql, function(queryerr, vals, fields){
                //释放连接
                conn.release();
                //事件驱动回调
                callback(queryerr, vals, fields);
            });
        }
    });
};

exports.pool 	= pool;
exports.query 	= query;
