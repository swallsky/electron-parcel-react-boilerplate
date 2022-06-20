import React from "react";
import { Breadcrumb } from "antd";

export default function Page1() {
  return (
    <>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Page1</Breadcrumb.Item>
        <Breadcrumb.Item>Page1</Breadcrumb.Item>
      </Breadcrumb>
      <div>Page1</div>
    </>
  );
}
