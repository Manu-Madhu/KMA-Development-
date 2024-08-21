import React from "react";
import UnderlinedHeading from "../Common/UnderlinedHeading";
import banner from "../../../../public/assets/events/events_banner.jpg";
import Image from "next/image";
import UpcomingEvents from "./UpcomingEvents";
import ArchivedEvents from "./ArchivedEvents";
import EventsCalender from "./EventsCalender";
import ConductEvent from "./ConductEvent";
import Flagship from "../Home/Flagship";
import PageEndQuery from "../Common/PageEndQuery";
function EventsPage() {
  return (
    <div className="pt-10 ">
      <UnderlinedHeading text="Events" />

      <Flagship />
      <UpcomingEvents />
      <ArchivedEvents />
      <EventsCalender />
      <PageEndQuery
        heading={`Interested to conduct event in KMA?`}
        subheading={`Click the below button to inquire hall`}
        button={{ title: "Inquire now", path: "/halls" }}
      />
    </div>
  );
}

export default EventsPage;
