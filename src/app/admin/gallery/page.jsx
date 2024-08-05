import TableFilter from "@/components/admin/common/TableFilter";
import TopPart from "@/components/admin/common/TopPart";
import GalleryContent from "@/components/admin/gallery/GalleryContent";
import React from "react";

const GalleryPage = () => {
  return (
    <div>
      <TopPart
        title={"View and manage gallery"}
        type={{ name: "button", content: "Upload New", link: "" }}
      />
      <TableFilter />

      <div>
        <GalleryContent />
      </div>
    </div>
  );
};

export default GalleryPage;
