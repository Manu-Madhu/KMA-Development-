// "use client";

// import React, { useCallback, useEffect, useState } from "react";
// import UnderlinedHeading from "../Common/UnderlinedHeading";
// // import { events } from "@/data/events";
// import EventCard from "../Common/EventCard";
// import axios from "@/axios-folder/axios";
// import { eventRoute } from "@/utils/Endpoint";

// function UpcomingEvents() {
//   const [loading, setLoading] = useState(false);
//   const [events, setEvent] = useState([]);

//   // get the event initial data
//   const getEventData = useCallback(() => {
//     setLoading(true);
//     axios
//       .get(eventRoute)
//       .then((res) => {
//         const upcomingEvents = res.data.events.filter((event) => {
//           const eventDate = new Date(event.date);
//           const today = new Date();
//           return eventDate >= today;
//         });

//         // Sort events by date in ascending order (optional)
//         const sortedEvents = upcomingEvents.sort(
//           (a, b) => new Date(a.date) - new Date(b.date)
//         );

//         setEvent(sortedEvents);
//       })
//       .catch((error) => {
//         console.log(error);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, []);

//   // initial data fetching
//   useEffect(() => {
//     getEventData();
//   }, []);

//   return (
//     <div className="max-w-screen-xl mx-auto p-3 w-full">
//       <UnderlinedHeading heading="Upcoming" text=" Events" />

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 mt-20">
//         {events.length > 0 ? (
//           events.map((event, index) => (
//             <EventCard border={true} key={index} data={event} />
//           ))
//         ) : (
//           <div>
//             <h1 className="font-bold mt-10 ">No Events Are Available For This Week..</h1>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default UpcomingEvents;
"use client"
import React, { useCallback, useEffect, useState } from "react";
import UnderlinedHeading from "../Common/UnderlinedHeading";
import EventCard from "../Common/EventCard";
import axios from "@/axios-folder/axios";
import { eventRoute } from "@/utils/Endpoint";
import EventForm from "./EventForm"; // Import the EventForm component

function UpcomingEvents() {
  const [loading, setLoading] = useState(false);
  const [events, setEvent] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

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
  }, [getEventData]);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const handleCloseForm = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="max-w-screen-xl mx-auto p-3 w-full">
      <UnderlinedHeading heading="Upcoming" text=" Events" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 mt-20">
        {events.length > 0 ? (
          events.map((event, index) => (
            <EventCard
              border={true}
              key={index}
              data={event}
              onClick={() => handleEventClick(event)}
            />
          ))
        ) : (
          <div>
            <h1 className="font-bold mt-10">No Events Are Available For This Week..</h1>
          </div>
        )}
      </div>

      {selectedEvent && (
        <EventForm
          event={selectedEvent}
          onClose={handleCloseForm}
        />
      )}
    </div>
  );
}

export default UpcomingEvents;
