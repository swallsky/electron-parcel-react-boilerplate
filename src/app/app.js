// const { app, BrowserWindow } = require("electron");
// const path = require("path");
import { app, BrowserWindow } from "electron";
import path from "path";

var win = null;

app.whenReady().then(() => {
  win = new BrowserWindow({
    width: 1280,
    height: 800
  });
  // if(process.env.NODE_ENV !== 'production'){ //开发环境
  //   win.loadURL("http://localhost:1234");
  // }else{ //正式环境
    win.loadFile(path.resolve("dist","web", "index.html"));
  // }
});
