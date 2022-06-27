const { app } = require("electron");
const path = require("path");
const fs = require("fs");
const pconfig = require(path.join(app.getAppPath(), "package.json"));

// 用户目录
let hPath = path.join(app.getPath("home"), "."+pconfig.name);
/**
 * 创建用户目录，存储用户数据
 * @returns 
 */
 exports.createHomePath = function(){
  if(!fs.existsSync(hPath)){
    fs.mkdirSync(hPath);
  }
}
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
exports.logpath = function (file) {
  return path.resolve(hPath, file);
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
exports.sqlitefile = path.resolve(
  hPath,
  pconfig.version + ".db"
);
