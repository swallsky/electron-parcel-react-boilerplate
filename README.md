# 设置electron国内镜像
```
# yarn 
yarn config set electron_mirror https://npm.taobao.org/mirrors/electron/

# npm
npm config set electron_mirror https://npm.taobao.org/mirrors/electron/
```
# 开发环境安装
```
# 安装依耐包
yarn
# 启动调试模式
yarn app:dev
```

# 目录结构说明
- app electron进程目录
 - libs 公共类
 - model 公共模型类
 - app.js 主进程
 - ipc.js 主进程与渲染进程间通讯
 - main.js 主窗口
- web 基于react的渲染进程页面

# 生成安装包
```
# mac
yarn pack:mac

# win 
yarn pack:win
```
