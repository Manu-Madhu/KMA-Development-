import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdFileDownload } from "react-icons/md";

const SocialConnectFilter = () => {
  return (
    <main className="flex flex-col lg:flex-row md:items-center justify-between p-3">
      <div className="flex flex-col lg:flex-row md:items-center md:justify-center md:gap-10">
        <div className="">
          <select
            name=""
            id=""
            className="focus:outline-none font-bold text-4xl"
            placeholder=""
          >
            <option value="" className="text-sm">
              Youtube
            </option>
            <option value="" className="text-sm">
              Test Option
            </option>
          </select>
        </div>
        <div className="gap-2 flex">
          <h1>
            sort by <span className="text-[#F1616C] ps-2">Date of event </span>
          </h1>
          <input type="" className="focus:outline-none " placeholder="" />
        </div>
      </div>

        <div className="flex items-center justify-center gap-5">
          <h1 className="text-[#808080] opacity-60 text-xs ">Showing 1-09 of 78</h1>
          <div className="text-white flex items-center justify-between gap-2">
            <button className="bg-[#F1616C]  rounded-lg p-1.5 px-3">
              <IoIosArrowBack size={20} />
            </button>
            <button className="bg-[#F1616C]  rounded-lg p-1.5 px-3">
              <IoIosArrowForward size={20} />
            </button>
          </div>
        </div>
    </main>
  );
};

export default SocialConnectFilter;
