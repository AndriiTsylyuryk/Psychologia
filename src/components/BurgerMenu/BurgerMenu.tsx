import { selectIsLoggedIn, selectUser } from "@/redux/auth/selector";
import React from "react";
import { slide as Menu } from "react-burger-menu";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import "./BurgerMenu.css";
import { logoutThunk } from "@/redux/auth/operations";
import { selectIsOpenBurger } from "@/redux/burger/selectors";
import { toggleBurgerMenu } from "@/redux/burger/slice";
import NightButton from "../NightButton/NightButton";

const BurgerMenu = () => {
  const isLoggendIn = useSelector(selectIsLoggedIn);

  const isOpen = useSelector(selectIsOpenBurger);

  const dispatch = useDispatch();

  const handleCloseMenu = () => {
    dispatch(toggleBurgerMenu());
  };

  const handleOnOpen = () => {
    dispatch(toggleBurgerMenu());
  };
  const handleOnClose = () => {
    dispatch(toggleBurgerMenu());
  };

  return (
    
    <Menu
      isOpen={isOpen}
      onOpen={handleOnOpen}
      onClose={handleOnClose}
      right
      width={"100%"}
    >
      {!isLoggendIn && (
        <NavLink to="/login" onClick={() => handleCloseMenu()}>
          Вхід
        </NavLink>
      )}
      {!isLoggendIn && (
        <NavLink to="/register" onClick={() => handleCloseMenu()}>
          Реєстрація
        </NavLink>
      )}
      {isLoggendIn && (
        <>
          <NavLink to="/about" onClick={() => handleCloseMenu()}>
            Про мене
          </NavLink>

          <NavLink to="/calendar" onClick={() => handleCloseMenu()}>
            Календар
          </NavLink>

          <button onClick={() => dispatch(logoutThunk()) && handleCloseMenu()}>
            Вихід
          </button>
        </>
      )}
      <NightButton />
    </Menu>
  );
};

export default BurgerMenu;
