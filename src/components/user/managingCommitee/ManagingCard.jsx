import Image from "next/image";
import React from "react";

const ManagingCard = ({ data }) => {
  return (
    <div className="border rounded-xl lg:rounded-3xl w-full h-[400px] md:w-[240px] md:h-[400px] overflow-hidden">
      <div>
        <Image
          src={data?.image}
          alt="bgImage"
          width={500}
          height={400}
          className="object-cover w-full h-[250px]"
        />
      </div>
      <div className="p-1 mt-1 capitalize text-center">
        <h4 className=" text-sm text-[#3E3E59]">{data?.designation}</h4>
        <h1 className="font-bold text-lg my-1 text-[#282828] capitalize">
          {data?.name}
        </h1>
        <p className="text-sm mt-1  text-[#3E3E59]">{data?.title}</p>
        <p className="text-sm mt-1 text-[#3E3E59]">{data?.description}</p>
      </div>
    </div>
  );
};

export default ManagingCard;
