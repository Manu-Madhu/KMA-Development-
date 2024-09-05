"use client";
import React, { useEffect, useState } from "react";
import { GalleryData } from "@/data/gallery";
import GalleryImageCard from "./GalleryImageCard";
import axios from "../../../axios-folder/axios";
import { toast } from "react-toastify";
import { galleryRoute } from "@/utils/Endpoint";

const useFetchGalleryData = () => {
  const [galleryData, setGalleryData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        const response = await axios.get(galleryRoute);
        const data = await response.data;
        console.log(data)
        if (data.error) {
          toast.error(`Error: ${data.error}`);
          return;
        }

        setGalleryData(data.gallery);
      } catch (err) {
        toast.error("Failed to load gallery data. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryData();
  }, []);

  return { galleryData, loading };
};

const GalleryContent = () => {
  const { galleryData, loading } = useFetchGalleryData();
  const [filteredData, setFilteredData] = useState([]);
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    if (!loading && galleryData.length > 0) {
      const uniqueCategories = [
        ...new Set(galleryData.map((item) => item.category)),
      ];
      setCategory(uniqueCategories);
      setSelectedCategory(uniqueCategories[0]);
      setFilteredData(
        galleryData.filter((item) => item.category === uniqueCategories[0])
      );
    }
  }, [galleryData, loading]);

  const FilterHandler = (data) => {
    setSelectedCategory(data);
    const filterData = galleryData.filter((items) => items?.category === data);
    setFilteredData(filterData);
  };

  if (loading) {
    return (
      <div class=" flex justify-center items-center">
        <div class="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div>
      {/* <h1>Filter by event:</h1>
      <div className="mt-3 flex gap-4 overflow-x-scroll">
        {category?.map((data, i) => (
          <div
            key={i}
            onClick={() => FilterHandler(data)}
            className={`${
              selectedCategory == data
                ? "bg-primaryColor text-white"
                : "text-[#000000]/60"
            }  border border-[#000000]/20 p-2 px-5  w-fit  text-xs rounded-2xl
             hover:bg-primaryColor hover:text-white cursor-pointer`}
          >
            {data}
          </div>
        ))}
      </div> */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-2 mt-4">
        {filteredData.map((item) => (
          <GalleryImageCard data={item} key={item?._id} />
        ))}
      </div>
    </div>
  );
};

export default GalleryContent;
