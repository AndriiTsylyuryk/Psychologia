import { selectIsLight } from "@/redux/burger/selectors";
import { toggleTheme } from "@/redux/burger/slice";
import React from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import { useDispatch, useSelector } from "react-redux";

const NightButton = () => {
  const isDark = useSelector(selectIsLight);

  const dispatch = useDispatch();

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <div>
      <DarkModeToggle
        size={50}
        onChange={() => handleToggleTheme()}
        checked={isDark}
      />
    </div>
  );
};

export default NightButton;
