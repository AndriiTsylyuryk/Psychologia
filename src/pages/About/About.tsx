import React from "react";
import { useTranslation } from "react-i18next";
import style from "./About.module.css";
import Accordeon from "@/components/Accordeon/Accordeon";

const About = () => {
  const { t } = useTranslation();
  return (
    <div className={style.aboutContainer}>
      <h2 className={style.about}>
        {t("about2")} <span>{t("me")}</span>
      </h2>
      <div className={style.heroImg}></div>
      <p className={style.aboutText}>
        {t(
          "A beginner psychologist and certified NLP (Neuro-Linguistic Programming) practitioner. I am currently in my fifth year at Sumy State Pedagogical University named after A.S. Makarenko."
        )}
      </p>
      <h3 className={style.requestsText}>{t("requests i work with:")}</h3>
      <div>
        <Accordeon />
      </div>
    </div>
  );
};

export default About;
