const { app } = require("electron");
const path = require("path");
/**
 * 返回electron各环境目录
 * @param {Array} ept
 * @returns
 */
exports.epath = function (ept) {
  let appPath = app.getAppPath();
  return path.resolve(appPath, "dist", ...ept);
};
