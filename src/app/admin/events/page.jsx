import TopPart from "@/components/admin/common/TopPart";
import React from "react";

const EventsPage = () => {
  return (
    <main>
      <TopPart
        title={"Create, edit or delete events"}
        type={{ name: "button", content: "Create new", link: "" }}
      />
    </main>
  );
};

export default EventsPage;
