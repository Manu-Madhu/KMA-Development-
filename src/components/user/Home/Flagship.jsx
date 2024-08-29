"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import countdownImg from "../../../../public/assets/home/countdown.png";
import Link from "next/link";
import axios from "@/axios-folder/axios";
import { eventRoute } from "@/utils/Endpoint";

function Flagship() {
  const [event, setEvent] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [targetDate, setTargetDate] = useState(new Date("2024-12-25T00:00:00")); // default date

  const [currentTime, setCurrentTime] = useState(new Date());
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [eventExpired, setEventExpired] = useState(false);

  // get event Data
  const getEvent = useCallback(() => {
    setLoading(true);
    axios
      .get(eventRoute)
      .then((res) => {
        const eventDate = res.data.events?.[0]?.date;
        const activeEvent = res.data.events.filter(
          (data) => data?.isArchived == false
        );

        const active = activeEvent[0]?.date;
        console.log(active, eventDate);
        if (eventDate) {
          console.log("testing");
          let eventTargetDate = new Date(eventDate);
          setEvent(res.data.events[0]);
          setTargetDate(eventTargetDate);

          if (active) {
            console.log("testing1");
             eventTargetDate = new Date(active);
            setEvent(activeEvent[0]);
            setTargetDate(eventTargetDate);
          }

          if (eventTargetDate < new Date()) {
            setEventExpired(true);
          } else {
            setEventExpired(false);
          }
        } else {
          setEventExpired(true);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

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

  // time change
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
      if (!eventExpired) {
        getTimeRemaining();
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [currentTime, targetDate, eventExpired]);

  // initial data
  useEffect(() => {
    getEvent();
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto my-10 lg:my-16 w-full h-[500px] bg-no-repeat bg-cover bg-center relative flex items-center">
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

        {eventExpired ? (
          <span className="text-xl sm:text-2xl">No events this week</span>
        ) : (
          <>
            <span className="text-xs">Will start in</span>

            <div
              data-aos="zoom-in"
              data-aos-duration="1000"
              className="mt-4 flex flex-col sm:flex-row items-center text-2xl sm:text-3xl font-bold lg:font-light max-sm:gap-2 "
            >
              <span>{countdown.days} Days</span>
              <div className="hidden sm:flex border-l-2 border-gray-500 h-5 mx-4"></div>
              <span>{countdown.hours} Hours</span>
              <div className="hidden sm:flex border-l-2 border-gray-500 h-5 mx-4"></div>
              <span>{countdown.minutes} Minutes</span>
              <div className="hidden sm:flex border-l-2 border-gray-500 h-5 mx-4"></div>
              <span>{countdown.seconds} Seconds</span>
            </div>

            <div className="relative overflow-hidden rounded-full mt-16">
              <Link href={"/events"}>
                <button className="buttonAnimation bg-white text-primaryColor rounded-full text-xs py-3 px-4">
                  <span>View all events</span>
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Flagship;
