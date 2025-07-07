import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selector";
import { NavLink } from "react-router-dom";
import { logoutThunk } from "../../redux/auth/operations";
import styles from "./AppBar.module.css";

import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import NightButton from "../NightButton/NightButton";
import toast from "react-hot-toast";

const AppBar = () => {
  const isLoggendIn = useSelector(selectIsLoggedIn);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutThunk())
      .unwrap()
      .then(() => {
        toast.success(t("logged out successfully"));
        navigate("/about");
      })
      .catch();
  };
  return (
    <div className={styles.headerContainer}>
      <div className={styles.logoContainer}>
        {!isLoggendIn && (
          <NavLink to="/">
            <p className={styles.name}>
              Aліна Смєлянець <span>Psychologist</span>
            </p>
          </NavLink>
        )}
        {isLoggendIn && (
          <NavLink to="/about">
            <p className={styles.name}>
              Aліна Смєлянець <span>Psychologist</span>
            </p>
          </NavLink>
        )}

        <LanguageSwitcher />
      </div>
      <div className={styles.navigation}>
        <NightButton />
        {!isLoggendIn && (
          <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? styles.activeNav : undefined
        }
        >
            {t("sign in")}
          </NavLink>
        )}
        {!isLoggendIn && (
          <NavLink
            to="/register"
            className={({ isActive }) =>
              isActive ? styles.activeNav : undefined
            }
          >
            {t("register")}
          </NavLink>
        )}
        {isLoggendIn && (
          <>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? styles.activeNav : undefined
              }
            >
              {t("about")}
            </NavLink>
            <NavLink
              to="/calendar"
              className={({ isActive }) =>
                isActive ? styles.activeNav : undefined
              }
            >
              {t("calendar")}
            </NavLink>
            <NavLink
              to="/prices"
              className={({ isActive }) =>
                isActive ? styles.activeNav : undefined
              }
            >
              {t("prices")}
            </NavLink>
            <button
              onClick={() => {
                handleLogout();
              }}
            >
              {t("exit")}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default AppBar;
