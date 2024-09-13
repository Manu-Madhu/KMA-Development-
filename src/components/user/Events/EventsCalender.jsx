"use client";
import React, { useCallback, useEffect, useState } from "react";
import UnderlinedHeading from "../Common/UnderlinedHeading";
import EventCard from "../Common/EventCard";
import Calendar from "./Calendar";
import axios from "@/axios-folder/axios";
import { eventRoute } from "@/utils/Endpoint";

function EventsCalender() {
  const [selectedEvent, setSelectedEvent] = useState(null);  // Selected event
  const [loading, setLoading] = useState(false);  // Loading state
  const [events, setEvents] = useState([]);  // All events

  // Fetch events data from the API
  const getEventData = useCallback(() => {
    setLoading(true);
    axios
      .get(eventRoute)
      .then((res) => {
        // Filter to find non-archived events
        const validEvents = res.data.events.filter((event) => !event.isArchived);

        // Sort events by date (latest to earliest)
        const sortedEvents = validEvents.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );

        // Set the event list
        setEvents(sortedEvents);

        // Set the latest event as the selected event initially
        if (sortedEvents.length > 0) {
          setSelectedEvent(sortedEvents[0]);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Fetch events data when component mounts
  useEffect(() => {
    getEventData();
  }, [getEventData]);

  // Function to handle date click on calendar
  const handleDateClick = (eventData) => {
    console.log("first")
    setSelectedEvent(eventData);  // Update the selected event
  };

  return (
    <div className="my-10 md:mt-16 md:pb-14 max-w-screen-xl mx-auto p-3 w-full">
      <UnderlinedHeading heading="Events" text=" Calendar" />
      <div className="flex max-md:flex-col justify-between mt-10 md:mt-16">
        <div className="w-[64%] max-md:w-full">
          {/* Pass events and handleDateClick function to Calendar */}
          <Calendar onDateClick={handleDateClick} eventdata={events} />
        </div>
        <div className="w-[34%] max-md:w-full mt-10 md:mt-20">
          {selectedEvent ? (
            <EventCard
              Name={selectedEvent.speakerName}
              Title={selectedEvent.title}
              Description={selectedEvent.description}
              Location={selectedEvent.location}
              data={selectedEvent}
              border={true}
            />
          ) : (
            <p>No event selected.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default EventsCalender;
