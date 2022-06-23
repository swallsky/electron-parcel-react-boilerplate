const { ipcMain } = require("electron");
const modelInit = require("./model/init");
const modelRegister = require("./model");

// 数据模型
function model() {
  //数据库初始化
  modelInit();
  // action user.add => model>user.js add method
  ipcMain.handle("model", async (event, action, args) => {
    if (action == "") console.log("Model action param is empty!");
    let acts = action.split(".");
    if (acts.length < 2) console.log("Model action param error:" + action);
    let actObj = modelRegister[acts[0]];
    let res = await actObj[acts[1]](args);
    return res;
  });
}
/**
 * 主进程
 */
module.exports = () => {
  model();
};
