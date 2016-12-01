var db = require("../models/database.js");
console.log(db.pool.escape);
db.query("SELECT * FROM knowledge.admin",function(err, vals, fields){
    //do something
    console.log(vals);
    // console.log(fields);
});