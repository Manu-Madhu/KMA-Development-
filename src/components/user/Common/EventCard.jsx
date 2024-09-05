import React from "react";
import eventpic from "../../../../public/assets/events/event1.png";
import Image from "next/image";

const EventCard = ({
  Name,
  Title,
  Description,
  Location,
  Picture,
  isArchived = false,
  border,
  data,
}) => {
  // Correct the function signature
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate(); // Extract the day
    const month = date.toLocaleString("default", { month: "short" }); // Extract the month name
    const year = date.getFullYear(); // Extract the year
    return { day, month, year }; // Return as an object
  };

  // Extract and format the date
  const { day, month, year } = formatDate(data?.date);

  return (
    <div
      className={`p-4 lg:p-7 relative overflow-clip flex flex-col ms-1 lg:ms-0 w-[97%] ${
        border ? "border" : ""
      }  h-80 max-md:h-64 justify-between  rounded-2xl bg-white`}
    >
      {/* base data */}
      <div className="flex gap-3">
        {/* name title */}
        <div className="">
          <h1 className="text-red-600 font-semibold max-md:text-sm">
            {data?.speakerName || Name}
          </h1>
          <h1 className="text-[1.5rem] font-semibold max-md:text-[1.2rem] leading-6 lg:leading-8 mt-1">
            {data?.title || Title}
          </h1>
        </div>


        {/* Date year */}
        <div className="">
          <div className={`flex flex-col text-end items-end ${isArchived ? "hidden" : ""}`}   >
            <p className="text-[2.1rem] max-md:text-[1.9rem] text-[#E3000F] leading-8 font-semibold">
              {day}
            </p>
            <p className="text-sm font-medium ">
              {month} {year}
            </p>
          </div>
        </div>
      </div>

      <p className="w-[65%] text-xs  lg:text-sm font-medium text-gray-600  my-auto ">
        {data?.description || Description}
      </p>

      <div
        className={`px-4 py-2 ${
          isArchived ? "bg-[#E3000F] text-white" : "bg-[#E3000F33]"
        } w-fit max-md:text-sm font-medium rounded-full`}
      >
        <p className="text-xs lg:text-sm">{data?.location || Location}</p>
      </div>

      <div className="size-72 blur-2xl absolute -bottom-10 -right-12 rounded-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]  from-[#E3000F83] via-[#E3000F20] to-transparent"></div>
      <Image
        className="h-[56%] w-fit bottom-0 right-0 absolute"
        width={500}
        height={500}
        src={data?.speakerCoverUrl || eventpic}
        alt="Event Picture"
      />
    </div>
  );
};

export default EventCard;
