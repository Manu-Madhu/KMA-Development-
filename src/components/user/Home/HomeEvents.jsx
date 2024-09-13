import React from "react";
import vector from "../../../../public/assets/kma csr awards/Vector.png";
import Image from "next/image";
import HomeCarousal from "./HomeEventCarousel/HomeCarousal";
import wavybg from "../../../../public/assets/events/wavybg.png";
import EventCard from "../Common/EventCard";

function HomeEvents() {
  return (
    <div className="w-full h-screen  bg-no-repeat bg-cover bg-center relative flex items-center mb-10">
      <div className="absolute top-0 w-screen h-20 z-10 bg-gradient-to-b from-white to-[#FFBEC2] "></div>
      <Image
        src={wavybg}
        alt=""
        fill
        className="z-0 object-cover sm:object-fill"
        quality={100}
      />

      <div className="w-full absolute">
        <div className="mx-auto w-fit mb-8">
          <h1 className="text-[2.8rem] max-md:text-[2.3rem] font-bold ml-3 z-10">
            Events
          </h1>
          <Image
            src={vector}
            alt="Vector"
            className="-mt-2 w-full object-cover"
          />
        </div>
        <div className="my-10 lg:my-20">
          <HomeCarousal />
        </div>
      </div>
    </div>
  );
}

export default HomeEvents;
