import FullCalendar from "@fullcalendar/react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import "./CustomStyles.css";
import { myAPI } from "@/config/API";
import { useDispatch, useSelector } from "react-redux";
import { selectToken } from "@/redux/auth/selector";
import { jwtDecode } from "jwt-decode";
import { useTranslation } from "react-i18next";
import { selectLanguage } from "@/redux/language/selector";
import CalendarModal from "../Modal/CalendarModal";
import { selectRequest } from "@/redux/modal/selectors";
import { clearRequest, setEventData, toggleModal } from "@/redux/modal/slice";
import { TiLockClosedOutline } from "react-icons/ti";

const Calendar = () => {
  const apiKey = import.meta.env.VITE_GOOGLE_CALENDAR_API_KEY;
  const googleCalendarId = import.meta.env.VITE_GOOGLE_CALENDAR_ID;
  const token = useSelector(selectToken);
  const { t } = useTranslation();
  const language = useSelector(selectLanguage);
  const dispatch = useDispatch();

  const handleDateSelect = async (selectInfo) => {
    const { start, end } = selectInfo;

    dispatch(setEventData({ start, end }));

    dispatch(toggleModal());
  };

  const renderEventContent = (eventInfo) => {
    const relatedEvent = eventInfo.event._def.extendedProps.description;
    const decodedToken = jwtDecode(token);
    return (
      <span>
        {relatedEvent === decodedToken.email ? (
          <span>{eventInfo.event.title}</span>
        ) : (
          <span className="closed">
            <TiLockClosedOutline size={20}/>
            {t("timeslot unavailabe")}
          </span>
        )}
      </span>
    );
  };

  return (
    <div>
      <FullCalendar
        plugins={[timeGridPlugin, googleCalendarPlugin, interactionPlugin]}
        initialView={window.innerWidth < 768 ? "timeGridDay" : "timeGridWeek"}
        height={600}
        // eventColor="red"
        headerToolbar={{ center: "timeGridWeek,timeGridDay" }}
        nowIndicator={true}
        timeZone="local"
        locale={language}
        allDayText="Час"
        slotMinTime={"08:00:00"}
        slotMaxTime={"20:00:00"}
        buttonText={{ today: t("today"), day: t("day"), week: t("week") }}
        googleCalendarApiKey={apiKey}
        events={{ googleCalendarId }}
        selectable={true}
        select={handleDateSelect}
        eventClick={(eventInfo) => {
          eventInfo.jsEvent.preventDefault();
          console.log(eventInfo)
        }}
        eventContent={renderEventContent}
        
      />
      <CalendarModal />
    </div>
  );
};

export default Calendar;
