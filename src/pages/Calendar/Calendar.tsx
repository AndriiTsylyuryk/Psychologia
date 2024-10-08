import React from "react";
import CalendarComponent from '../../components/Calendar/CalendarComponent';
import style from './Calendar.module.css'


const Calendar = () => {
  return <div className={style.calendar}><CalendarComponent/></div>
};

export default Calendar;
