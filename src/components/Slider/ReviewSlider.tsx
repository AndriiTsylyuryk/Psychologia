import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import style from "./ReviewSlider.module.css";
import { Pagination, Navigation, Autoplay } from "swiper/modules";


export default function ReviewSlider() {
  const carouselTexts = [
    {
      text: "'Ви супер, допомогли справитись з залежністю'",
      name: "Анна",
    },
    { text: "'Дякую за поміч'", name: "Микола" },
    { text: "'Це наша не остання зусріч'", name: "Андрій" },
  ];

  return (
    <>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        // navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className={style.swiper}
        speed={1000}
      >
        {carouselTexts.map((item) => {
          return (
            <SwiperSlide className={style.swiperslide}>
              <div className={style.naming}>
                <span>{item.name}</span>
              </div>
              <p>{item.text}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
