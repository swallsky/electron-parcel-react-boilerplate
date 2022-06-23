const sqlcmd = require("../libs/sqlcmd");

// example:
// sqlcmd.table('username',{
//     'id':'pri',
//     'username':'varchar',
//     'password':'varchar'
// });

module.exports = function(){
    sqlcmd.exec();
}