import React from "react";
import moment from "moment";
import FullCalendar from "@fullcalendar/react";
import "react-big-calendar/lib/css/react-big-calendar.css";
// import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from "@fullcalendar/timegrid";
// const localizer = momentLocalizer(moment);
import style from "./CalendarComponent.module.css";
import './CustomStyles.css'
const Calendar = () => {
  return (
    <div>
      <FullCalendar
        plugins={[timeGridPlugin]}
        initialView="timeGridDay"
        height={600}
        nowIndicator={true}
        timeZone="local"
        locale={"uk"}
        allDayText="Час"
        slotMinTime={'08:00:00'}
        buttonText={{today:'Сьогодні'}}
        
      />
    </div>
  );
};

export default Calendar;
