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
 * 返回日志目录，默认项目根目录
 * @param {string} file 日志文件
 * @returns 
 */
exports.logpath= function(file){
  return path.resolve(app.getAppPath(),file);
}

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
exports.sqlitefile = path.resolve(app.getPath("home"), "."+pconfig.name+"-" + pconfig.version + ".db");
