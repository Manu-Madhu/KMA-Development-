"use client";
import Link from "next/link";
import React from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const SubNav = ({ data, isOpen, handleToggle }) => {
  return (
    <div className="relative">
      <div
        onClick={handleToggle}
        key={data?._id}
        className="flex items-center justify-center gap-2"
      >
        <h1 className="cursor-pointer">{data?.name}</h1>
        {isOpen ? (
          <IoIosArrowUp key={data?._id} className="cursor-pointer" />
        ) : (
          <IoIosArrowDown key={data?._id} className="cursor-pointer" />
        )}
      </div>
      {isOpen && (
        <div className="bg-white shadow w-fit absolute top-6 rounded z-10 p-2 md:min-w-[200px]">
          {data.subData.map((subItem) => (
            <Link
              onClick={handleToggle}
              key={subItem?._id}
              href={subItem?.Path || "#"}
            >
              <li className="cursor-pointer truncate capitalize hover:bg-primaryColor hover:rounded text-sm text-black hover:text-white px-5 py-2">
                {subItem?.name}
              </li>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SubNav;
