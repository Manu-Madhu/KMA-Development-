"use client";
import React, { useState } from "react";
import { GalleryData } from "@/data/gallery";
import GalleryImageCard from "./GalleryImageCard";

const GalleryContent = () => {
  const UniqData = [...new Set(GalleryData.map((item) => item.category))];
  const [galleryData, setGalleryData] = useState(GalleryData);
  const [category, setCategory] = useState(UniqData);
  const [selectedCategory, setSelectedCategory] = useState(category?.[0]);

  const FilterHandler = (data) => {
    setSelectedCategory(data);
    const filterData = GalleryData.filter((items) => items?.category === data);
    setGalleryData(filterData);
  };

  return (
    <div>
      <h1>Filter by event:</h1>
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
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-2 mt-4">
        {galleryData.map((item) => (
          <GalleryImageCard data={item} key={item?._id} />
        ))}
      </div>
    </div>
  );
};

export default GalleryContent;
