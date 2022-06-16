const {app} = require("electron");
const { MainWindow } = require("./dist/app/app");

var win = null;
app.whenReady().then(() => {
  win = MainWindow();
});