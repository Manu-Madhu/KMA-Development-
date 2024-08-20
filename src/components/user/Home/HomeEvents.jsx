import React from "react";
import vector from "../../../../public/assets/kma csr awards/Vector.png";
import Image from "next/image";
import EventCard from "../Common/EventCard";
import HomeCarousal from "./HomeEventCarousel/HomeCarousal";
import wavybg from "../../../../public/assets/events/wavybg.png";

function HomeEvents() {
  return (
    <div className="w-full h-[700px]  bg-no-repeat bg-cover bg-center relative flex items-center">
      <Image
        src={wavybg}
        alt=""
        fill
        className="z-0 object-cover sm:object-fill"
        quality={100}
      />

      <div className="w-full absolute ">
        <div className="mx-auto w-fit mb-8">
          <h1 className="text-[2.8rem] max-md:text-[2.2rem] font-bold ml-3">
            Events
          </h1>
          <Image
            src={vector}
            alt="Vector"
            className="-mt-2 w-full object-cover"
          />
        </div>
        <div className="mt-20">
          <HomeCarousal />
        </div>
      </div>
    </div>
  );
}

export default HomeEvents;
