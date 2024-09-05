"use client";

import React, { useCallback, useEffect, useState } from "react";
import UnderlinedHeading from "../Common/UnderlinedHeading";
import EventCard from "../Common/EventCard";
import axios from "@/axios-folder/axios";
import { eventRoute } from "@/utils/Endpoint";

function ArchivedEvents() {
  const [loading, setLoading] = useState(false);
  const [events, setEvent] = useState([]);

  // get the event initial data
  const getEventData = useCallback(() => {
    setLoading(true);
    axios
      .get(eventRoute)
      .then((res) => {
        const archivedEvents = res.data.events.filter((event) => {
          const eventDate = new Date(event.date);
          const today = new Date();
          return eventDate < today;
        });

        const sortedEvents = archivedEvents.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
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
    <div className="mt-16 max-w-screen-xl mx-auto p-3 w-full">
      <UnderlinedHeading heading="Archived" text=" Events" />
      <p className="my-10 md:my-14">
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
        {events.map((event, index) => (
          <EventCard border={true} key={index} data={event} />
        ))}
      </div>
    </div>
  );
}

export default ArchivedEvents;
