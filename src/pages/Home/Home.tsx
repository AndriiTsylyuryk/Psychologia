import React from "react";
import { Fade } from "react-awesome-reveal";
import style from "./Home.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selector";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Home = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn); // Виправлено назву змінної
  const carouselTexts = [
    "Ви супер психолог, допомогли справитись з залежністю",
    "Гарні циці",
    "Дупа топ",
  ];
  
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div>
      {!isLoggedIn && (
        <>
          <Fade delay={1000}>
            <h1 className={style.header}>
              Привіт, я Аліна Смєлянець, твій Психолог
            </h1>
          </Fade>
          <div className={style.slidercontainer}>
            <Slider {...settings}>
              {carouselTexts.map((text, index) => (
                <div key={index}>
                  <h3>{text}</h3>
                </div>
              ))}
            </Slider>
          </div>
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
