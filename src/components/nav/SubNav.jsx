"use client";
import Link from "next/link";
import React from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const SubNav = ({ data, isOpen, handleToggle, closeNav }) => {
  const onChanger = () => {
    handleToggle();
    closeNav(false);
  };
  return (
    <div className="relative w-full">
      <div
        onClick={handleToggle}
        key={data?._id}
        className="flex items-center justify-between gap-2 cursor-pointer border lg:border-none w-full p-2 rounded"
      >
        <h1 className="cursor-pointer">{data?.name}</h1>
        {isOpen ? (
          <IoIosArrowUp key={data?._id} className="cursor-pointer" />
        ) : (
          <IoIosArrowDown key={data?._id} className="cursor-pointer" />
        )}
      </div>
      {isOpen && (
        <div className="bg-white shadow w-full border border-red-300 lg:w-fit absolute lg:top-6 rounded-2xl z-10 p-2 md:min-w-[200px] mt-1">
          {data.subData.map((subItem) => (
            <Link
              onClick={onChanger}
              key={subItem?._id}
              href={subItem?.Path || "#"}
            >
              <li className="cursor-pointer truncate capitalize hover:bg-primaryColor hover:rounded-xl text-sm text-black hover:text-white px-5 py-2">
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
