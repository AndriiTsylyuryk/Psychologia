import { selectIsLoggedIn, selectUser } from "@/redux/auth/selector";
import React from "react";
import { slide as Menu } from "react-burger-menu";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import "./BurgerMenu.css";
import { logoutThunk } from "@/redux/auth/operations";
import { selectIsOpenBurger } from "@/redux/burger/selectors";
import { toggleBurgerMenu } from "@/redux/burger/slice";

const BurgerMenu = () => {
  const isLoggendIn = useSelector(selectIsLoggedIn);
  const isOpen = useSelector(selectIsOpenBurger);
  const dispatch = useDispatch();

  return (
    <Menu isOpen={isOpen} right width={"100%"}>
      {!isLoggendIn && (
        <NavLink to="/login" onClick={() => dispatch(toggleBurgerMenu())}>
          Вхід
        </NavLink>
      )}
      {!isLoggendIn && (
        <NavLink to="/register" onClick={() => dispatch(toggleBurgerMenu())}>
          Реєстрація
        </NavLink>
      )}
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
