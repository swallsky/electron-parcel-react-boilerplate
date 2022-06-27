const { app } = require("electron");
const log4js = require("log4js");
const { logpath } = require("./dir");

//格式设定 @https://log4js-node.github.io/log4js-node/index.html
let pattern = "%[ %d{yyyy/MM/dd hh:mm:ss} %p %m %]"; //定义日志格式
log4js.configure({
  appenders: {
    debug: {
      type: "stdout",
      layout: { type: "pattern", pattern: pattern },
    },
    app: {
      type: "file",
      layout: { type: "pattern", pattern: pattern },
      filename: logpath("app.log"),
    },
  },
  categories: {
    default: { appenders: ["debug"], level: "trace", enableCallStack: true },
    app: { appenders: ["app"], level: "trace", enableCallStack: true },
  },
});

const logger = log4js.getLogger(app.isPackaged == true ? "app" : "default");

exports.debug = function (str) {
  logger.level = "debug";
  logger.debug(str);
};

exports.trace = function (str) {
  logger.level = "trace";
  logger.trace(str);
};

exports.info = function (str) {
  logger.level = "info";
  logger.info(str);
};

exports.warn = function (str) {
  logger.level = "warn";
  logger.warn(str);
};

exports.error = function (str) {
  logger.level = "error";
  logger.error(str);
};

exports.fatal = function (str) {
  logger.level = "fatal";
  logger.fatal(str);
};
