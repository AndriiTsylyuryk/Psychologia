import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selector";
import { NavLink } from "react-router-dom";
import { logoutThunk } from "../../redux/auth/operations";

const AppBar = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const isLoggendIn = useSelector(selectIsLoggedIn);
  return (
    <div>
      <h3>{user.name}</h3>
      <ul>
        <li>
          <NavLink to="/">Додому</NavLink>
        </li>
        <li>
          <NavLink to="/about">Про мене</NavLink>
        </li>
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

        {isLoggendIn && (
          <li>
            <button onClick={() => dispatch(logoutThunk())}>Вихід</button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default AppBar;
