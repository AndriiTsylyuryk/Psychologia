import style from "./Home.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selector";
import ReviewSlider from "@/components/Slider/ReviewSlider";
import { LiaInstagram } from "react-icons/lia";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Home = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { t } = useTranslation();
  return (
    <div className={style.home}>
      {!isLoggedIn && (
        <>
          <h1 className={style.h1}>
            {t('hello')} <div className={style.heroImg}></div>
            <span>{t("i am your psychologist")}</span>
          </h1>
          <ReviewSlider />
          <div className={style.media}>
            <a
              href="https://www.instagram.com/alina_smelyanets_?igsh=YmVlaG83Nm1yaHN2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LiaInstagram className={style.icon} size={50} />
            </a>
            <a
              href="https://wa.me/37253704388"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className={style.icon} size={50} />
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
