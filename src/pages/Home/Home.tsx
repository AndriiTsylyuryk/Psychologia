import React from "react";
import { Fade } from "react-awesome-reveal";
import style from "./Home.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selector";

const Home = () => {
  const isLoggendIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      {!isLoggendIn && (
        <Fade delay={1000}>
          <h1 className={style.header}>
            Привіт, я Аліна Смєлянець, твій Психолог
          </h1>
        </Fade>
      )}
      {isLoggendIn && (
        <Fade className={style.header} delay={1000}>
          Вітаю на платформі
        </Fade>
      )}
    </div>
  );
};

export default Home;
