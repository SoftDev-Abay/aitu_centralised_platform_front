"use client"; // Ensures FullCalendar runs only on the client side

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import AdminWrapper from "@/app/pages/Wrappers/AdminPanel/Wrapper";
import PageHeader from "@/app/components/PageHeader/PageHeader";

// Dynamically import FullCalendar to prevent SSR issues
const FullCalendar = dynamic(() => import("@fullcalendar/react"), {
  ssr: false,
});
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const Page = () => {
  const PageHeaderProps = {
    title: "Calendar",
    goBack: false,
  };

  // Sample events
  const [events, setEvents] = useState([
    {
      title: "Meeting",
      start: "2025-02-20T10:00:00",
      end: "2025-02-20T11:00:00",
    },
    { title: "Lunch", start: "2025-02-21T13:00:00", allDay: true },
  ]);

  // Handles when a user clicks on a date
  const handleDateClick = (info) => {
    alert(`Clicked date: ${info.dateStr}`);
  };

  return (
    <AdminWrapper>
      <PageHeader {...PageHeaderProps} />

      {/* Calendar Container */}
      <div style={{ padding: "20px", background: "#fff", borderRadius: "8px" }}>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          selectable={true}
          editable={true}
          events={events}
          dateClick={handleDateClick} // Handle date clicks
        />
      </div>
    </AdminWrapper>
  );
};

export default Page;
