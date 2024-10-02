import React from "react";
import { Fade } from "react-awesome-reveal";
import style from "./Home.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selector";
import ReviewSlider from "@/components/Slider/ReviewSlider";
import { LiaInstagram } from "react-icons/lia";
import { FaWhatsapp } from "react-icons/fa";
const Home = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={style.home}>
      {!isLoggedIn && (
        <>
          <h1 className={style.h1}>
            Привіт, <div className={style.heroImg}></div>
            <span>я твій Психолог</span>
          </h1>

          <ReviewSlider />

          <div className={style.media}>
            <LiaInstagram className={style.icon} size={50} />
            <FaWhatsapp className={style.icon} size={50} />
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
