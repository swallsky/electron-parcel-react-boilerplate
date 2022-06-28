const { app, BrowserWindow, Tray, nativeImage, Menu } = require("electron");
const { epath, assets } = require("./libs/dir");

/**
 * 主窗口
 * @returns
 */
exports.mainWindow = function () {
  let win = new BrowserWindow({
    width: 1280,
    height: 800,
    webPreferences: {
      preload: epath(["web", "preload", "main.js"])
    }
  });
  win.loadFile(epath(["web", "index.html"]));
  if (app.isPackaged == false) {
    //开发环境时
    win.webContents.openDevTools();
  }

  //自定义菜单
  appMenu();

  return win;
};

/**
 * 应用菜单
 */
function appMenu() {
  const isMac = process.platform === "darwin";
  const template = [
    // { role: 'appMenu' }
    ...(isMac
      ? [
          {
            label: app.name,
            submenu: [
              { role: "about", label: "关于app" },
              { type: "separator" },
              { role: "hide", label: "隐藏app" },
              { type: "separator" },
              { role: "quit", label: "退出app" },
            ],
          },
        ]
      : []),
    // { role: 'editMenu' }
    {
      label: "编辑",
      submenu: [
        { role: "cut", label: "剪切" },
        { role: "copy", label: "复制" },
        { role: "paste", label: "粘帖" },
      ],
    },
    ...(app.isPackaged === true
      ? []
      : [
          {
            label: "开发",
            submenu: [
              { role: "reload", label: "刷新" },
              { role: "forceReload", label: "强制刷新" },
              { role: "toggleDevTools", label: "切换开发者工具" },
              { type: "separator" },
              { role: "resetZoom", label: "还原大小" },
              { role: "zoomIn", label: "缩小" },
              { role: "zoomOut", label: "放大" },
              { type: "separator" },
              { role: "togglefullscreen", label: "全屏" },
            ],
          },
        ]),
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}

/**
 * 托盘图标
 * @param {*} win
 * @returns
 */
exports.trayIcon = function (win) {
  let tray = null;
  // 加入托盘
  const icon = nativeImage.createFromPath(assets(["logo", "logo-tray.png"]));
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
