var db = require("../models/database.js");
console.log(db.pool.escape);
db.query("select * from admin limit 10",function(err, vals, fields){
    //do something
    console.log(vals);
    console.log(fields);
});