"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const SubNav = ({ data }) => {
  const [showData, setShowData] = useState(false);
  return (
    <div className="relative">
      <div
        onClick={() => setShowData(!showData)}
        key={data?._id}
        className="flex items-center justify-center gap-2"
      >
        <h1 className="cursor-pointer">{data?.name}</h1>
        {showData ? (
          <IoIosArrowUp key={data?._id} className="cursor-pointer" />
        ) : (
          <IoIosArrowDown key={data?._id} className="cursor-pointer" />
        )}
      </div>
      {showData && (
        <div className="bg-white shadow w-fit absolute top-6 rounded z-10 p-2 md:min-w-[200px]">
          {data.subData.map((data) => (
            <Link
              onClick={() => setShowData(false)}
              key={data?._id}
              className="\"
              href={data?.Path || "#"}
            >
              <li className="cursor-pointer truncate capitalize hover:bg-primaryColor hover:rounded text-sm hover:text-white px-5 py-2">
                {data?.name}
              </li>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SubNav;
