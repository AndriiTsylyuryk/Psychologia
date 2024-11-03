import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import style from "./ReviewSlider.module.css";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next";

export default function ReviewSlider() {
  const { t } = useTranslation();

 
  const carouselTexts = [
    {
      text: t("reviews.0.text"),
      name: t("reviews.0.name")
    },
    {
      text: t("reviews.1.text"),
      name: t("reviews.1.name")
    },
    {
      text: t("reviews.2.text"),
      name: t("reviews.2.name")
    }
  ];

  return (
    <Swiper
      pagination={{
        type: "fraction"
      }}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      modules={[Pagination, Navigation, Autoplay]}
      className={style.swiper}
      speed={1000}
    >
      {carouselTexts.map((item, index) => (
        <SwiperSlide className={style.swiperslide} key={index}>
          <div className={style.naming}>
            <span>{item.name}</span>
          </div>
          <p>{item.text}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
