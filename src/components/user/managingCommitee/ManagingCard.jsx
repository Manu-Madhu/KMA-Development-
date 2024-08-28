import Image from "next/image";
import React from "react";

const ManagingCard = ({ data }) => {
  return (
    <div className="border rounded-xl lg:rounded-3xl w-full md:w-[240px] md:h-[290px] overflow-hidden">
      <div>
        <Image
          src={data?.image}
          alt="bgImage"
          width={300}
          height={300}
          className="object-contain w-full"
        />
      </div>
      <div className="p-4 capitalize">
        <h1 className="font-semibold text-[18px] text-[#282828]">{data?.name}</h1>
        <p className="text-sm mt-1 text-[#3E3E59]">{data?.designation}</p>
      </div>
    </div>
  );
};

export default ManagingCard;
