import React from "react";
import UnderlinedHeading from "@/components/user/Common/UnderlinedHeading";
import ConductEvent from "@/components/user/ConductEvent";
import GalleryContent from "@/components/user/gallery/GalleryContent";

const GalleryPage = () => {
  return (
    <div className="pt-10 max-md:pt-5">
      {/* title */}
      <div className="">
        <UnderlinedHeading heading={"Image"} text={"Gallery"} />
      </div>

      {/* Content Part */}
      <div className="max-w-screen-xl mx-auto my-6 md:mt-10 md:mb-20 p-3">
        <GalleryContent />
      </div>

      {/* Bottom part */}
      <ConductEvent
        heading={"Want to See More Social Media Resources?"}
        subheading={"Click the button below to see more resources"}
        button={{ title: "View More", path: "/gallery" }}
      />
    </div>
  );
};

export default GalleryPage;
