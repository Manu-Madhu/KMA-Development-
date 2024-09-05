"use client";

import React, { useCallback, useEffect, useState } from "react";
import UnderlinedHeading from "../Common/UnderlinedHeading";
// import { events } from "@/data/events";
import EventCard from "../Common/EventCard";
import axios from "@/axios-folder/axios";
import { eventRoute } from "@/utils/Endpoint";

function UpcomingEvents() {
  const [loading, setLoading] = useState(false);
  const [events, setEvent] = useState([]);

  // get the event initial data
  const getEventData = useCallback(() => {
    setLoading(true);
    axios
      .get(eventRoute)
      .then((res) => {
        const upcomingEvents = res.data.events.filter((event) => {
          const eventDate = new Date(event.date);
          const today = new Date();
          return eventDate >= today;
        });

        // Sort events by date in ascending order (optional)
        const sortedEvents = upcomingEvents.sort(
          (a, b) => new Date(a.date) - new Date(b.date)
        );

        setEvent(sortedEvents);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // initial data fetching
  useEffect(() => {
    getEventData();
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto p-3 w-full">
      <UnderlinedHeading heading="Upcoming" text=" Events" />
      <p className="my-10 md:my-14 text-[#1F392C]">
        The Management of the Association is vested in a Managing Committee of
        not more than sixteen elected members of which at least three persons
        should be from Corporate Sector. The Managing Committee shall be elected
        at the Annual General Meeting of the Association every year. There shall
        be a President, two Vice Presidents, an Honorary Secretary, a Joint
        Secretary and a Treasurer all of whom shall be elected by the Managing
        Committee and will hold office for the duration of the Management
        Committee for which they were elected. In addition to the elected
        members there are Co-opted Members and Special Invitees.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8">
        {events.length > 0 ? (
          events.map((event, index) => (
            <EventCard border={true} key={index} data={event} />
          ))
        ) : (
          <div>
            <h1 className="font-bold ">No Events Are Available For This Week..</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default UpcomingEvents;
