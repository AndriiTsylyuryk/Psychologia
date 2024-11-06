import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selector";
import { NavLink } from "react-router-dom";
import { logoutThunk } from "../../redux/auth/operations";
import styles from "./AppBar.module.css";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import NightButton from "../NightButton/NightButton";

const AppBar = () => {
  const isLoggendIn = useSelector(selectIsLoggedIn);
  const { t } = useTranslation();

  return (
    <div className={styles.headerContainer}>
      <div className={styles.logoContainer}>
        <NavLink to="/">
          <p className={styles.name}>
            Aліна Смєлянець <span>Psychologist</span>
          </p>
        </NavLink>
        <LanguageSwitcher />
      </div>
      <div className={styles.navigation}>
        <NightButton />
        {!isLoggendIn && <NavLink to="/login">{t("sign in")}</NavLink>}
        {!isLoggendIn && <NavLink to="/register">{t("register")}</NavLink>}
        {isLoggendIn && (
          <>
            <NavLink to="/about">{t("about")}</NavLink>
            <NavLink to="/calendar">{t("calendar")}</NavLink>
            <NavLink to="/prices">{t("prices")}</NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default AppBar;
