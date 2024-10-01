import { selectIsLoggedIn, selectUser } from "@/redux/auth/selector";
import React from "react";
import { slide as Menu } from "react-burger-menu";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styles from "./BurgerMenu.module.css";
import "./BurgerMenu.css";
import { logoutThunk } from "@/redux/auth/operations";

const BurgerMenu = () => {
  const showSettings = (e) => {
    e.preventDefault;
  };
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const isLoggendIn = useSelector(selectIsLoggedIn);

  return (
    <Menu right width={"100%"} isOpen>
      {!isLoggendIn && <NavLink to="/login">Вхід</NavLink>}
      {!isLoggendIn && <NavLink to="/register">Реєстрація</NavLink>}
      {isLoggendIn && (
        <>
          <NavLink to="/about">Про мене</NavLink>

          <NavLink to="/calendar">Календар</NavLink>

          <button onClick={() => dispatch(logoutThunk())}>Вихід</button>
        </>
      )}
    </Menu>
  );
};

export default BurgerMenu;
