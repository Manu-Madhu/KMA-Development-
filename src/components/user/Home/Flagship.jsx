"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import countdownImg from "../../../../public/assets/home/countdown.png";

function Flagship() {
  const targetDate = new Date("2024-12-25T00:00:00");
  const [currentTime, setCurrentTime] = useState(new Date());
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const getTimeRemaining = () => {
    const timeDifference = targetDate - currentTime;
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    setCountdown({ days, hours, minutes, seconds });
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
      getTimeRemaining();
    }, 1000);

    return () => clearInterval(intervalId);
  }, [currentTime]);

  return (
    <div className="max-w-screen-xl mx-auto my-10 lg:my-16 w-full h-[500px]  bg-no-repeat bg-cover bg-center relative flex items-center">
      <Image
        src={countdownImg}
        alt=""
        fill
        className="z-0 object-cover sm:object-fill"
        quality={100}
      />

      <div className="w-full h-full absolute text-white flex flex-col items-center justify-center">
        <h2 className="text-[#FF3C49] text-3xl sm:text-4xl font-bold mb-10">
          Our Flagship Event
        </h2>

        <span className="text-xs">Will starts in</span>

        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="mt-4 flex flex-col sm:flex-row items-center text-2xl sm:text-3xl font-bold lg:font-light max-sm:gap-2 "
        >
          <span className="">{countdown?.days} Days</span>
          <div className="hidden sm:flex border-l-2 border-gray-500 h-5 mx-4"></div>
          <span className="">{countdown?.hours} Hours</span>
          <div className="hidden sm:flex border-l-2 border-gray-500 h-5 mx-4"></div>
          <span className="">{countdown?.minutes} Minutes</span>
          <div className="hidden sm:flex border-l-2 border-gray-500 h-5 mx-4"></div>
          <span className="">{countdown?.seconds} Seconds</span>
        </div>

        <button className="mt-16 bg-white text-primaryColor rounded-2xl text-xs py-2 px-4">
          View all events
        </button>
      </div>
    </div>
  );
}

export default Flagship;
