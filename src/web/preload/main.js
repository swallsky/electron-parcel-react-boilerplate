const { contextBridge,ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronApi",{
    /**
     * 读取模型数据
     * @param {*} action 模型标识
     * @param {*} args 相关参数
     * @returns 
     */
    model:async (action,args)=>{
        return await ipcRenderer.invoke("model",action,args);
    }
});