import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import React from "react";
import { useTranslation } from "react-i18next";
import style from "./Accordeon.module.css";

const Accordeon = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Accordion  defaultExpanded={true}>
        <AccordionSummary
          sx={{ backgroundColor: "#accef0" }}
          className={style.accordeonSummary}
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
         
        >
          <p className={style.accordeonText}>{t("emotional states")}</p>
        </AccordionSummary>
        <AccordionDetails className={style.accordeonDetails}>
          <p>
            {t(
              "anxiety, depression, apathy, worry, fatigue, aggression, helplessness, guilt, insecurity, irritability, etc."
            )}
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          sx={{ backgroundColor: "#accef0" }}
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <p className={style.accordeonText}>{t("search...")}</p>
        </AccordionSummary>
        <AccordionDetails>
          <p>{t("searching for life goals and new ideas.")}</p>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          sx={{ backgroundColor: "#accef0" }}
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <p className={style.accordeonText}>{t("behaviour")}</p>
        </AccordionSummary>
        <AccordionDetails>
          <p>{t("repetitive behaviors or reactions that hinder.")}</p>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          sx={{ backgroundColor: "#accef0" }}
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <p className={style.accordeonText}>
            {t("conflicts, beliefs, fears")}
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li>{t("internal and external conflicts.")}</li>
            <li>
              {t("working with limiting beliefs that hinder personal growth.")}
            </li>
            <li>{t("overcoming fears and phobias.")}</li>
          </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Accordeon;
