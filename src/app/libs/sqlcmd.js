const sqlorm = require("./sqlorm");

// 需要执行sql数组,主要用于初始化数据
var sqlArray = [];

/**
 * 创建表
 * @param {string} tb 表名
 * @param {Object} fields 字段 {id:"pri",username:"varchar"}
 */
exports.table = function (tb = "", fields = {}) {
  let tempfields = [];
  let tmptype = {
    pri: " INTEGER PRIMARY KEY AUTOINCREMENT",
    int: " INT",
    varchar: " VARCHAR",
  };
  let fmd = "",
    fdname = "",
    fdtp = "";
  for (n in fields) {
    fdname = n;
    fdtp = fields[n];
    fmd = tmptype[fdtp] ? fdname + tmptype[fdtp] : fdname + " " + fdtp;
    tempfields.push(fmd);
  }
  tempfields.push("create_date DATETIME DEFAULT (CURRENT_TIMESTAMP)");
  sqlArray.push(
    "CREATE TABLE IF NOT EXISTS " + tb + "(" + tempfields.join(",") + ");"
  );
};

/**
 * 执行sql语句
 */
exports.exec = function () {
  for (let i = 0; i < sqlArray.length; i++) {
    if (sqlArray[i] !== "") {
        sqlorm.execute(sqlArray[i]); //执行sql
    }
  }
};
