import style from "./Home.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selector";
import ReviewSlider from "@/components/Slider/ReviewSlider";
import { LiaInstagram } from "react-icons/lia";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import Accordeon from "@/components/Accordeon/Accordeon";

const Home = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { t } = useTranslation();
  return (
    <div className={style.home}>
      {!isLoggedIn && (
        <>
          {/* <div className={style.heroContainer}> */}
          <div>
            <h1 className={style.h1}>{t("hello")}</h1>
            <span className={style.span}>{t("i am your psychologist")}</span>
          </div>
          <div className={style.heroImg}></div>
          <p className={style.aboutText}>
            {t(
              "A beginner psychologist and certified NLP (Neuro-Linguistic Programming) practitioner. I am currently in my fifth year at Sumy State Pedagogical University named after A.S. Makarenko."
            )}
          </p>
          <Accordeon />
          <ReviewSlider />
          <div className={style.media}>
            <a
              href="https://www.instagram.com/alina_smelyanets_?igsh=YmVlaG83Nm1yaHN2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LiaInstagram className={style.icon} size={50} color="#9f2466" />
            </a>
            <a
              href="https://wa.me/37253704388"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className={style.icon} size={45} color="green" />
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
