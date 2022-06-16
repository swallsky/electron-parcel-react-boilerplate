const { app, BrowserWindow } = require("electron");
const { epath } = require("./utils/dir");

var win = null;
app.whenReady().then(() => {
  win = new BrowserWindow({
    width: 1280,
    height: 800,
    webPreferences: {
      preload: epath(["app", "preload", "main.js"]),
    },
  });
  win.loadFile(epath(["web", "index.html"]));
  win.webContents.openDevTools();
});
