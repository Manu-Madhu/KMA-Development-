"use client";
import React, { useState, useEffect } from "react";
import { bannersRoute } from "@/utils/Endpoint"; // Assuming this is the correct path
import axios from "@/axios-folder/axios";
import VideoBackground from "./VideoBackground";
import Link from "next/link";

function LandingPart() {
  const [bannerItems, setBannerItems] = useState([]); // Store banner items from the API
  const [currentIndex, setCurrentIndex] = useState(0);
  const sample =
    "https://firebasestorage.googleapis.com/v0/b/kmaassets-afcf8.appspot.com/o/WhatsApp%20Video%202024-08-28%20at%2012.32.09_827ceb27.mp4?alt=media&token=4258c900-c172-4730-9ed7-005d45b9207e";

  // Fetch banner items from the API
  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await axios.get(bannersRoute);
        setBannerItems(response.data);
      } catch (error) {
        console.error("Failed to fetch banner items:", error);
      }
    };

    fetchBanners();
  }, []);

  // Auto-slide functionality to change the banner every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === bannerItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [bannerItems]);

  return (
    <div className="h-screen relative w-full flex flex-col items-center text-white bg-white">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="h-screen relative w-full flex flex-col items-center text-white bg-white">
          <div className="absolute w-screen h-screen bg-black/60 z-10 top-0 left-0"></div>
          <VideoBackground videoSrc={sample} />
        </div>
      </div>

      <div className="absolute flex flex-col items-center justify-center gap-3 lg:gap-6 top-1/4">
        <h1 className="lg:text-[4.5rem] text-[3rem] leading-[50px] lg:leading-[80px] font-bold z-10 text-center capitalize">
          spearheading management <br /> movement
        </h1>

        <p className="lg:text-lg mt-4 text-base font-[300] text-center w-2/3 lg:w-full z-10">
          Honouring Excellence in CSR and ESG Leadership
        </p>

        <Link href={`/member`} className="">
          <button className="homeButton p-2 mt-2 lg:p-2.5 px-6 lg:px-8 w-fit rounded-full lg:font-semibold z-10">
            <span>Join Us</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPart;
