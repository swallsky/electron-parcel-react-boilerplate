import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import AppLayout from "./pages/AppLayout";
import Home from "./pages/Home";
import Page1 from "./pages/Page1";

import "../../assets/css/web.css";

// 路由
export default function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="" element={<Home />} />
          <Route path="page1" element={<Page1 />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
