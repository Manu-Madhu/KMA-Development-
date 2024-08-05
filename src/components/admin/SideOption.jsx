"use client";
import React from "react";
import Link from "next/link";
import { Sidebar } from "@/data/admin/Sidebar";
import { usePathname } from "next/navigation";

const SideOption = () => {
  const path = usePathname();
  console.log(path);
  return (
    <div className="mt-3 mb-20 ">
      <ul className="flex flex-col gap-1 overflow-y-scroll">
        {Sidebar?.map((item) => (
          <Link key={item?._id} href={`${item?.path}`}>
            <li
              className={`${
                path == item?.path
                  ? "text-white bg-[#F1616c]"
                  : " text-[#475467] "
              } p-3 hover:bg-[#F1616c] hover:text-white  rounded cursor-pointer font-[600] text-[18px]`}
            >
              {item?.name}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default SideOption;
