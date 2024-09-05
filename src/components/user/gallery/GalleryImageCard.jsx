import Image from "next/image";
import React from "react";

const GalleryImageCard = ({ data }) => {
  return (
    <div className="w-full h-[200px] rounded-xl">
      <Image
        src={data?.fileUrl}
        alt="GalleryImage"
        className="w-full h-full object-cover rounded"
        width={500}
        height={500}
      />
    </div>
  );
};

export default GalleryImageCard;
