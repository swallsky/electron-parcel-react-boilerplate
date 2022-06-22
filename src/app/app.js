const { app, BrowserWindow } = require("electron");
const { epath } = require("./libs/dir");

function MainWindow() {
  win = new BrowserWindow({
    width: 1280,
    height: 800,
    webPreferences: {
      preload: epath(["web", "preload", "main.js"]),
    },
  });
  win.loadFile(epath(["web", "index.html"]));
  if (app.isPackaged == false) { //开发环境时
    win.webContents.openDevTools();
  }
  return win;
}

var win = null;
app.whenReady().then(() => {
  win = MainWindow();
});
