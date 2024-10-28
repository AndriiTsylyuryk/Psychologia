import { selectIsLoggedIn, selectUser } from "@/redux/auth/selector";
import React from "react";
import { slide as Menu } from "react-burger-menu";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import "./BurgerMenu.css";
import { logoutThunk } from "@/redux/auth/operations";
import { selectIsOpenBurger } from "@/redux/burger/selectors";
import { toggleBurgerMenu } from "@/redux/burger/slice";
import NightButton from "../NightButton/NightButton";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

const BurgerMenu = () => {
  const isLoggendIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();
  const isOpen = useSelector(selectIsOpenBurger);
  const { t } = useTranslation();

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
  const handleLogout = () => {
    dispatch(logoutThunk())
      .unwrap()
      .then(() => {
        toast.success(t("logged out successfully"));
        navigate("/");
      })
      .catch();
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
          {t("sign in")}
        </NavLink>
      )}
      {!isLoggendIn && (
        <NavLink to="/register" onClick={() => handleCloseMenu()}>
          {t("register")}
        </NavLink>
      )}
      {isLoggendIn && (
        <>
          <NavLink to="/about" onClick={() => handleCloseMenu()}>
            {t("about")}
          </NavLink>

          <NavLink to="/calendar" onClick={() => handleCloseMenu()}>
            {t("calendar")}
          </NavLink>

          <button
            onClick={() => {
              handleLogout();
              handleCloseMenu();
            }}
          >
            {t("exit")}
          </button>
        </>
      )}
      <NightButton />
    </Menu>
  );
};

export default BurgerMenu;
