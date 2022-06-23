const { ipcMain } = require("electron");
const modelRegister = require("./model");

// 数据模型
function model() {
  // action user.add => model>user.js add method
  ipcMain.handle("model", async (event, action, args) => {
    if (action == "") console.log("action param is empty!");
    let acts = action.split(".");
    if (acts.length < 2) console.log("action param error:" + action);
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
