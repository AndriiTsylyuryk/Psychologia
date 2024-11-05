import FullCalendar from "@fullcalendar/react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import "./CustomStyles.css";
import { myAPI } from "@/config/API";
import { useSelector } from "react-redux";
import { selectToken } from "@/redux/auth/selector";
import { jwtDecode } from "jwt-decode";
import { useTranslation } from "react-i18next";
import { selectLanguage } from "@/redux/language/selector";



const Calendar = () => {
  const apiKey = import.meta.env.VITE_GOOGLE_CALENDAR_API_KEY;
  const googleCalendarId = import.meta.env.VITE_GOOGLE_CALENDAR_ID;
  const token = useSelector(selectToken);
  const { t } = useTranslation();
  const language = useSelector(selectLanguage);


  const handleDateSelect = async (selectInfo) => {
    const { start, end } = selectInfo;
    const title = prompt(t("please enter details"));
    if (title) {
      try {
        await myAPI.post(
          "calendar/event",
          { start, end, title },
          {
            headers: {
              Authorization: `Bearer ${token}`, 
            },
          }
        );
        alert(t("request sent"));
      } catch (error) {
        console.error(error);
      }
    }
  };


  const renderEventContent = (eventInfo) => {
    const relatedEvent = eventInfo.event._def.extendedProps.description;
    const decodedToken = jwtDecode(token)
     return <div>({relatedEvent === decodedToken.email ? (<span>{eventInfo.event.title}</span>) : <span className='closed'>{t( "timeslot unavailabe")}</span>}
   )</div>
  };

  return (
    <div>
      <FullCalendar
        plugins={[timeGridPlugin, googleCalendarPlugin, interactionPlugin]}
        initialView="timeGridDay"
        height={600}
        headerToolbar={{center:'timeGridWeek,timeGridDay',}}
        nowIndicator={true}
        timeZone="local"
        locale={language}
        allDayText="Час"
        slotMinTime={"08:00:00"}
        slotMaxTime={'20:00:00'}
        buttonText={{ today: t("today"), day: t("day"), week:t("week") }}
        googleCalendarApiKey={apiKey}
        events={{ googleCalendarId }}
        selectable={true}
        select={handleDateSelect}
        eventClick={(eventInfo) => {
          eventInfo.jsEvent.preventDefault();
        }}
        eventContent={renderEventContent}
        
      />
    </div>
  );
};

export default Calendar;
