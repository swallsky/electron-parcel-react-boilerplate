const { app } = require("electron");
const path = require("path");
const pconfig = require(path.join(app.getAppPath(), "package.json"));
/**
 * 返回electron各环境目录
 * @param {Array} adir
 * @returns
 */
exports.epath = function (adir) {
  return path.resolve(app.getAppPath(), "dist", ...adir);
};

/**
 * 返回资源目录
 * @param {*} adir
 * @returns
 */
exports.assets = function (adir) {
  return path.resolve(app.getAppPath(), "assets", ...adir);
};

/**
 * 返回sqlite数据库文件地址
 * @returns
 */
exports.sqlitefile = function () {
  return path.join(app.getPath("home"), ".sqlite3-" + pconfig.version + ".db");
};