import React, { useEffect } from "react";
import { Breadcrumb,Button } from "antd";
const { model,readExcel } = window.electronApi;

export default function Home() {
  // 首页
  useEffect(async () => {
    let res = await model("example.debug", "id=1");
    console.log(res);
  });

  async function openFileExcel(){
    let pa = await readExcel();
    console.log("pa:",pa.filePaths[0]);
  }

  return (
    <>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>首页</Breadcrumb.Item>
        <Breadcrumb.Item>首页导航</Breadcrumb.Item>
      </Breadcrumb>
      <div>
        <div>首页 hello world</div>
        <Button onClick={openFileExcel}>读取excel</Button>
      </div>
    </>
  );
}
