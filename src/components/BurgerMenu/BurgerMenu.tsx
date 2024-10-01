import { selectIsLoggedIn, selectUser } from "@/redux/auth/selector";
import React from "react";
import { slide as Menu } from "react-burger-menu";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styles from "./BurgerMenu.module.css";
import "./BurgerMenu.css";

const BurgerMenu = () => {
  const showSettings = (e) => {
    e.preventDefault;
  };
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const isLoggendIn = useSelector(selectIsLoggedIn);

  return (
    <Menu right width={"100%"}>
      <ul>
        
        {!isLoggendIn && (
          <li>
            <NavLink to="/login">Вхід</NavLink>
          </li>
        )}
        {!isLoggendIn && (
          <li>
            <NavLink to="/register">Реєстрація</NavLink>
          </li>
        )}
      </ul>
    </Menu>
  );
};

export default BurgerMenu;
