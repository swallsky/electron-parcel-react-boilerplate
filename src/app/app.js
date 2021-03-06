const { app, BrowserWindow } = require("electron");
require("./libs/dir").createHomePath();
const { mainWindow, trayIcon } = require("./main");
const ipcManager = require("./ipc");
const updater = require("./updater");
const log = require("./libs/log");

var win = null;
var iconTary = null;

//启动主进程
app.whenReady().then(() => {
  log.trace("start ipc");
  ipcManager(); //启动主进程通讯
  log.trace("start main window");
  win = mainWindow();
  log.trace("start trayIcon");
  iconTary = trayIcon(win);
  // log.trace("start autoUpdater");
  // updater();
});
// 关闭所有窗口时
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    //非mac系统
    log.trace("exit app")
    app.quit();
    win = null;
  } else {
    iconTary.destroy();
  }
});

// 激活应用时
app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    log.trace("activate app");
    win = mainWindow();
    iconTary = trayIcon(win);
    mainLoading(win);
  }
});

// 只运行单个应用
const gotTheLock = app.requestSingleInstanceLock();
if (!gotTheLock) {
  app.quit();
} else {
  app.on("second-instance", (event, commdLine, workingDirctory) => {
    if (win) {
      if (win.isMinimized()) win.restore();
      win.focus();
      win.show();
    }
  });
}
