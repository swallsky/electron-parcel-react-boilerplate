const { ipcMain } = require("electron");
const modelInit = require("./model/init");
const modelRegister = require("./model");
const log = require("./libs/log");

// 数据模型
function model() {
  //数据库初始化
  log.trace("model init");
  modelInit();
  // action user.add => model>user.js add method
  log.trace("ipcMain start");
  ipcMain.handle("model", async (event, action, args) => {
    if (action == "") console.log("Model action param is empty!");
    let acts = action.split(".");
    if (acts.length < 2) console.log("Model action param error:" + action);
    let actObj = modelRegister[acts[0]];
    if(typeof actObj == 'undefined'){
      return "Model:"+acts[0]+" is not found!";
    }
    if(typeof actObj[acts[1]] == 'undefined'){
      return "Model action:"+action+" is not found!";
    }
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
