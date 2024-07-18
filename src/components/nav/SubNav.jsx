"use client";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const SubNav = ({ data }) => {
  return (
    <div className="flex items-center justify-center gap-2">
      <li className="cursor-pointer">{data?.name}</li>
      {data.subData.map((data) => (
        <IoIosArrowDown key={data?._id} className="cursor-pointer" />
      ))}
    </div>
  );
};

export default SubNav;
