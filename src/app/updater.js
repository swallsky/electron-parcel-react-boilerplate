const { app, autoUpdater } = require("electron");

// 更新应用
module.exports = function(){
  const server ="https://github.com/swallsky/electron-parcel-react-boilerplate/releases/download";
  const feed = `${server}/${process.platform}-${process.arch}-${app.getVersion()}.zip`;
  autoUpdater.setFeedURL(feed);
  //每隔10分钟检查更新一次
  setInterval(() => {
    autoUpdater.checkForUpdates();
  }, 10 * 60 * 1000);
};
