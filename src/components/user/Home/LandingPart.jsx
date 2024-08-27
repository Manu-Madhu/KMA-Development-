"use client";
import React, { useState, useEffect } from "react";
import useAxiosPrivate from "@/hooks/useAxiosPrivate"; // Assuming your custom axios hook
import { bannersRoute } from "@/utils/Endpoint"; // Assuming this is the correct path

function LandingPart() {
  const axiosPrivate = useAxiosPrivate();
  const [bannerItems, setBannerItems] = useState([]); // Store banner items from the API
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch banner items from the API
  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await axiosPrivate.get(bannersRoute); // Fetch banners from API
        setBannerItems(response.data); // Assume response.data is an array of banners
      } catch (error) {
        console.error("Failed to fetch banner items:", error);
      }
    };

    fetchBanners(); // Fetch data when component mounts
  }, [axiosPrivate]);

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
        {bannerItems.length > 0 && (
          <img
            src={bannerItems[currentIndex].fileUrl} // Use `fileUrl` from the fetched data
            alt={bannerItems[currentIndex].name} // Use `name` for alt text
            className="w-full h-full object-cover"
          />
        )}
      </div>

      <div className="absolute flex flex-col items-center justify-center gap-3 lg:gap-6 top-1/4">
        <h1 className="text-[4.5rem] max-sm:text-3xl leading-[80px] font-bold z-10 text-center">
          Shaping a sustainable <br /> future
        </h1>

        <p className="lg:text-xl mt-4 text-base font-[200] text-center w-2/3 lg:w-full">
          Honouring Excellence in CSR and ESG Leadership
        </p>

        <button className="p-2 lg:p-3 px-4 lg:px-8 mt-8 border border-gray-600 w-fit rounded-full font-semibold bg-white text-red-600">
          Join Us
        </button>
      </div>
    </div>
  );
}

export default LandingPart;
