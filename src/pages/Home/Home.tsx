import React from "react";
import { Fade } from "react-awesome-reveal";
import style from "./Home.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selector";
import Slider from "react-slick";

const Home = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn); // Виправлено назву змінної
  const carouselTexts = [
    "Ви супер психолог, допомогли справитись з залежністю",
    "Гарні циці",
    "Дупа топ",
  ];

  return (
    <div>
      {!isLoggedIn && (
        <>
          <Fade delay={1000}>
            <h1 className={style.header}>
              Привіт, я Аліна Смєлянець, твій Психолог
            </h1>
          </Fade>
          <Slider />
        </>
      )}
      {isLoggedIn && (
        <Fade className={style.header} delay={1000}>
          Вітаю на платформі
        </Fade>
      )}
    </div>
  );
};

export default Home;
