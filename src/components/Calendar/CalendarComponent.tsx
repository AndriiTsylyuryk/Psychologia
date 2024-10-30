import React from "react";
import FullCalendar from "@fullcalendar/react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import "./CustomStyles.css";
import { myAPI } from "@/config/API";

const Calendar = () => {
  const apiKey = import.meta.env.VITE_GOOGLE_CALENDAR_API_KEY;
  const googleCalendarId = import.meta.env.VITE_GOOGLE_CALENDAR_ID;

  const handleDateSelect = async (selectInfo) => {
    const { start, end } = selectInfo;
    const title = prompt("Введіть деталі вашої зустрічі:");
    if (title) {
      try {
        await myAPI.post("calendar/event", {
          start,
          end,
          title,
        });
        alert("Запит на зустріч надіслано!");
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div>
      <FullCalendar
        plugins={[timeGridPlugin, googleCalendarPlugin, interactionPlugin]}
        initialView="timeGridDay"
        height={600}
        nowIndicator={true}
        timeZone="local"
        locale={"uk"}
        allDayText="Час"
        slotMinTime={"08:00:00"}
        buttonText={{ today: "Сьогодні" }}
        googleCalendarApiKey={apiKey}
        events={{ googleCalendarId }}
        selectable={true}
        select={handleDateSelect}
        eventClick={(eventInfo) => {
          eventInfo.jsEvent.preventDefault();
          console.log(eventInfo);
        }}
      />
    </div>
  );
};

export default Calendar;
