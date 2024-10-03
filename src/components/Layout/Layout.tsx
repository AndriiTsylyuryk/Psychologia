import React from "react";
import AppBar from "../AppBar/AppBar";
import { Outlet } from "react-router-dom";
import style from './Layout.module.css'

const Layout = () => {
  return (
    <div>
      {/* <AppBar /> */}
      <Outlet />
    </div>
  );
};

export default Layout;
