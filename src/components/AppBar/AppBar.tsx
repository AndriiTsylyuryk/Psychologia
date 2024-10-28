import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selector";
import { NavLink } from "react-router-dom";
import { logoutThunk } from "../../redux/auth/operations";
import styles from "./AppBar.module.css";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

const AppBar = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const isLoggendIn = useSelector(selectIsLoggedIn);
  return (
    <div className={styles.headerContainer}>
      <NavLink to='/'><p className={styles.name}>Aліна Смєлянець <span>Psychologist</span></p></NavLink>
      <LanguageSwitcher/>
    </div>
  );
};

export default AppBar;
