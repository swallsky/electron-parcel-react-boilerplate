import React, { useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import { BookOutlined, UngroupOutlined } from "@ant-design/icons";
const { Sider, Content } = Layout;

export default function AppLayout() {
  const navigate = useNavigate(); //导航跳转
  const [defMenu, setDefMenu] = useState(); //设置默认菜单状态
  const [menuData, setMenuData] = useState([]);

  // 数据处理
  useEffect(function () {
    // 默认选中
    setDefMenu(window.location.hash.substring(1) || ["/"]);

    setMenuData([
      { label: "首页", key: "/", icon: <BookOutlined /> },
      { label: "Page1", key: "/page1", icon: <UngroupOutlined /> }
    ]);
  },[]);
  //点击菜单
  function menuClick(e) {
    setDefMenu(e.key);
    navigate(e.key);
  }

  return (
    <Layout>
      <Sider width={280} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={defMenu}
          selectedKeys={defMenu}
          style={{ height: "100vh", borderRight: 0 }}
          onClick={menuClick}
          items={menuData}
        />
      </Sider>
      <Layout style={{ padding: "0 24px 24px", height: "100vh" }}>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}
