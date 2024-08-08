"use client";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";

const TopPart = ({ title, type }) => {
  return (
    <main className="flex flex-col lg:flex-row items-start md:items-center justify-between md:my-4 my-2 p-3">
      <h1 className="text-secondary text-2xl md:text-4xl md:font-[350] mb-3 lg:mb-0 w-full capitalize">
        {title}
      </h1>
      {type?.name == "search" ? (
        <div className="relative flex items-center w-full lg:w-1/3">
          <input
            type="text"
            name=""
            className={`w-full rounded-3xl text-sm bg-[#475467]/25 p-3 px-5  ps-12
                placeholder:text-[#475467] placeholder:font-[500] placeholder:text-xl focus:outline-none`}
            placeholder="search"
          />
          <CiSearch size={25} className="absolute top-2 left-3" />
        </div>
      ) : type?.name == "button" ? (
        <div className="flex items-end justify-end w-full ">
          <button className="bg-[#E3000F] flex items-center justify-center gap-3  p-3 px-5 w-full lg:w-fit rounded-xl text-white text-sm">
            <FaPlus /> {type?.content}
          </button>
        </div>
      ) : (
        <div></div>
      )}
    </main>
  );
};

export default TopPart;
