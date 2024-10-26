import React from "react";
import moment from "moment";
import FullCalendar from "@fullcalendar/react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import interactionPlugin from "@fullcalendar/interaction"; 
import timeGridPlugin from "@fullcalendar/timegrid";
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import "./CustomStyles.css";
import { myAPI } from "@/config/API";


const Calendar = () => {
  const handleDateSelect = async (selectInfo) => {
    const { start, end } = selectInfo;
    const title = prompt("Введіть деталі вашої зустрічі:");

    if (title) {
      try { await myAPI.post("/api/create-event", {
          body: JSON.stringify({ start, end, title }),
        });
      } catch (error) {
        console.error(error);
      }
    }
  };
  return (
    <div>
      <FullCalendar
        plugins={[timeGridPlugin, googleCalendarPlugin,interactionPlugin ]}
        initialView="timeGridDay"
        height={600}
        nowIndicator={true}
        timeZone="local"
        locale={"uk"}
        allDayText="Час"
        slotMinTime={"08:00:00"}
        buttonText={{ today: "Сьогодні" }}
        googleCalendarApiKey="AIzaSyBPEauVSK3tecB8Wn2mtIiLhxdHb-BghEU"
        events={{googleCalendarId: 'navigator.tsylyuryk@gmail.com'}}
        selectable={true}
        select={handleDateSelect}
      />
    </div>
  );
};

export default Calendar;
