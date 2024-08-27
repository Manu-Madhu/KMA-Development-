import Image from "next/image";
import React from "react";

const GalleryImageCard = ({ data }) => {
  return (
    <div className="w-full rounded-xl">
      <Image
        src={data?.fileUrl}
        alt="GalleryImage"
        className="w-full object-cover"
        width={500}
        height={500}
      />
    </div>
  );
};

export default GalleryImageCard;
