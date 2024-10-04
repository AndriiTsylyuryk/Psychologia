import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selector";
import { NavLink } from "react-router-dom";
import { logoutThunk } from "../../redux/auth/operations";
import styles from "./AppBar.module.css";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

const AppBar = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const isLoggendIn = useSelector(selectIsLoggedIn);
  return (
    <div className={styles.headerContainer}>
      <NavLink to='/'><p className={styles.name}>Aліна Смєлянець <span>Psychologist</span></p></NavLink>
      
      {/* <h3>{user.name}</h3> */}
      {/* <ul className={styles.navList}>
        {!isLoggendIn && (
          <li className={styles.navItem}>
            <NavLink to="/login">Вхід</NavLink>
          </li>
        )}
        {!isLoggendIn && (
          <li className={styles.navItem}>
            <NavLink to="/register">Реєстрація</NavLink>
          </li>
        )}

        {isLoggendIn && (
          <>
            <li className={styles.navItem}>
              <NavLink to="/about">Про мене</NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink to="/calendar">Календар</NavLink>
            </li>
            <li className={styles.navItem}>
              <button
                onClick={() => dispatch(logoutThunk())}
                className={styles.logoutButton}
              >
                Вихід
              </button>
            </li>
          </>
        )}
      </ul> */}
    </div>
  );
};

export default AppBar;
