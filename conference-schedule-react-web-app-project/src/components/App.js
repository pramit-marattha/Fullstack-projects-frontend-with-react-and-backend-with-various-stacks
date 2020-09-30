import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import EventDelete from "./EventDelete";
import "../styles/App.css";

function App() {
  const [weekendsVisible, setWeekendsVisible] = useState(true);
  const [currentEvents, setCurrentEvents] = useState([]);

  return (
    <>
      <div>
        <div className="main">
          <div className="schedule">
            <span>C</span>
            <span className="boxa"></span>
            <span>n</span>
            <span>f</span>
            <span>e</span>
            <span>r</span>
            <span>e</span>
            <span>n</span>
            <span>c</span>
            <span>e</span>
            <span> </span>
            <span>S</span>
            <span>c</span>
            <span>h</span>
            <span>e</span>
            <span>d</span>
            <span>u</span>
            <span>l</span>
            <span>e</span>
          </div>
        </div>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={weekendsVisible}
          select={handleDateSelect}
          eventClick={EventDelete}
          eventsSet={handleEvents}
        />
      </div>
    </>
  );

  function handleWeekendsToggle() {
    setWeekendsVisible({ weekendsVisible: !weekendsVisible });
  }

  function handleDateSelect(selectInfo) {
    let title = prompt("Please enter name for your conference event");
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  }

  function handleEvents(events) {
    setCurrentEvents({
      currentEvents: events,
    });
  }
}

export default App;
