import { selectIsLight } from "@/redux/burger/selectors";
import { toggleTheme } from "@/redux/burger/slice";
import style from "./NightButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { FaMoon, FaSun } from "react-icons/fa";

const NightButton = () => {
  const isLight = useSelector(selectIsLight);
  const dispatch = useDispatch();
  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className={style.button}>
      <div
        className={style.switch}
        data-checked={!isLight}
        onClick={handleToggleTheme}
        tabIndex={0}
        role="button"
        aria-pressed={!isLight}
        style={{ outline: "none" }}
      >
        <div className={style.thumb}>
          {isLight ? (
            <FaMoon className={style.icon} color="var(--color-text)" />
          ) : (
            <FaSun className={style.icon} color="var(--color-text)" />
          )}
        </div>
      </div>
    </div>
  );
};

export default NightButton;
