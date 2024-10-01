import { selectIsLoggedIn } from "@/redux/auth/selector";
import React from "react";
import { slide as Menu } from "react-burger-menu";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styles from "./BurgerMenu.module.css";
import "./BurgerMenu.css";

const BurgerMenu = () => {
  const showSettings = (e) => {
    e.preventDefault;
    console.log("clicked");
  };

  return (
    <Menu right width={"100%"}>
      <a id="home" className="menu-item" href="/">
        Home
      </a>
      <a id="about" className="menu-item" href="/about">
        About
      </a>
      <a id="contact" className="menu-item" href="/contact">
        Contact
      </a>
      <a onClick={showSettings} className="menu-item--small" href="">
        Settings
      </a>
    </Menu>
  );
};

export default BurgerMenu;
