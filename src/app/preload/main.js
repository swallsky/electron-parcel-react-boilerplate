const { contextBridge } = require("electron");


contextBridge.exposeInMainWorld("electronApi",{
    open:()=>{
        console.log("测试");
    }
})