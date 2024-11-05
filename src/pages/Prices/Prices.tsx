import React from 'react'
import { useTranslation } from 'react-i18next';
import style from './Prices.module.css'
import { NavLink } from 'react-router-dom';

import { TbHandClick } from "react-icons/tb";



const Prices = () => {
    const { t } = useTranslation();
  return (
    <div className={style.aboutContainer}><h2 className={style.prices}>{t("prices")}</h2>
    <ul className={style.pricesList}>
        <li>{t("first appointment is free")}</li>
        <li>{t("price for Ukraine")}</li>
        <li>{t("price for Europe")}</li>
    </ul>
    <NavLink to='/calendar' className={style.calendarLink}>{t("press here to make an appointment")}<TbHandClick /></NavLink>
    </div>
  )
}

export default Prices