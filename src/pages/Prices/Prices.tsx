import React from 'react'
import { useTranslation } from 'react-i18next';
import style from './Prices.module.css'


const Prices = () => {
    const { t } = useTranslation();
  return (
    <div className={style.aboutContainer}><h2 className={style.prices}>{t("prices")}</h2>
    <ul>
        <li>{t("first appointment is free")}</li>
        <li>{t("price for Ukraine")}</li>
        <li>{t("price for Europe")}</li>
    </ul>
    </div>
  )
}

export default Prices