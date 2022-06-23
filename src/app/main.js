const { app,BrowserWindow, Tray, nativeImage } = require("electron");
const { epath,assets } = require("./libs/dir");

/**
 * 主窗口
 * @returns
 */
exports.mainWindow = function () {
  let win = new BrowserWindow({
    width: 1280,
    height: 800,
    webPreferences: {
      preload: epath(["web", "preload", "main.js"]),
    },
  });
  win.loadFile(epath(["web", "index.html"]));
  if (app.isPackaged == false) {
    //开发环境时
    win.webContents.openDevTools();
  }
  return win;
};

exports.trayIcon = function (win) {
  let tray = null;
  // console.log('mu:',app.getAppPath(),path.resolve(path.join(path.dirname(__dirname), "src", "assets", "logo", "logo-tray.png")))
  // 加入托盘
  const icon = nativeImage.createFromPath(
    assets(["logo", "logo-tray.png"])
  );
  tray = new Tray(icon);
  // const contextMenu = Menu.buildFromTemplate([
  //   { label: "菜单1", type: "radio" },
  //   { label: "菜单2", type: "radio", checked: true },
  //   { label: "菜单1", type: "radio" },
  // ]);
  // iconTary.setContextMenu(contextMenu);
  tray.addListener("click", (e) => {
    win.show();
  });
  return tray;
};
