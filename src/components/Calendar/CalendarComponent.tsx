import React from "react";
import moment from "moment";
import FullCalendar from "@fullcalendar/react";
import "react-big-calendar/lib/css/react-big-calendar.css";

import timeGridPlugin from "@fullcalendar/timegrid";

import "./CustomStyles.css";


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
        slotMinTime={"08:00:00"}
        buttonText={{ today: "Сьогодні" }}
        events={[
          {
            title: "event1",
            start: "2024-10-10 10:00",
            end: "2024-10-10 13:00",
          },
          {
            title: "event2",
            start: "2010-01-05",
            end: "2010-01-07",
          },
        ]}
      />
    </div>
  );
};

export default Calendar;
