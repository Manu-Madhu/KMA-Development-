import TopPart from "@/components/admin/common/TopPart";
import EventGridPart from "@/components/admin/events/EventsGridPart";
import React from "react";

const EventsPage = () => {
  return (
    <div>
      <TopPart
        title={"Create, edit or delete events"}
        type={{ name: "button", content: "Create new", link: "" }}
      />
      <EventGridPart />
    </div>
  );
};

export default EventsPage;
