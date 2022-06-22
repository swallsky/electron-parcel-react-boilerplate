import React, { useEffect } from "react";
import { Breadcrumb } from "antd";

export default function Home() {
  // 首页
  useEffect(() => {
    window.electronApi.open();
  });

  return (
    <>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>首页</Breadcrumb.Item>
        <Breadcrumb.Item>首页导航</Breadcrumb.Item>
      </Breadcrumb>
      <div>首页 hello world</div>
    </>
  );
}
