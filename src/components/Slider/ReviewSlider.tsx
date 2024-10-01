import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import style from "./ReviewCarouse.module.css";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { CiFaceSmile } from "react-icons/ci";


export default function ReviewSlider() {
  const carouselTexts = [
    "'Ви супер психолог, допомогли справитись з залежністю'",
    "'Гарні циці'",
    "'Дупа топ'",
  ];

  return (
    <>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className={style.swiper}
        speed={1000}
      >
        {carouselTexts.map((item) => {
          return (
            <SwiperSlide className={style.swiperslide}>
              <CiFaceSmile />

              <p>{item}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
