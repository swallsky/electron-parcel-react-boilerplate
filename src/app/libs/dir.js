const { app } = require("electron");
const path = require("path");
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
exports.assets = function(adir){
  return path.resolve(app.getAppPath(), "assets", ...adir);
}