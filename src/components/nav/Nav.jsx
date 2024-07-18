"use client"

import { NavData } from "@/data/NavData";
import { IoMenu } from "react-icons/io5";

import React, { useState } from "react";
import Image from "next/image";
import SubNav from "./SubNav";
import Link from "next/link";

const Nav = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <div>
      {/* Window View */}
      <div className="max-w-screen-xl mx-auto w-full  hidden lg:flex items-center justify-between h-[80px] p-3">
        <Image
          src={"/logo.png"}
          alt="logo"
          className=""
          width={140}
          height={50}
        />
        <ul className="flex gap-5">
          {NavData.map((item) => (
            <div key={item?._id} className="flex items-center">
              {item?.subData?.length > 0 ? (
                <SubNav data={item} />
              ) : (
                <li className="cursor-pointer">
                  <Link href={item?.Path}>{item?.name}</Link>
                </li>
              )}
            </div>
          ))}
        </ul>
        <button className="border rounded-2xl text-sm p-2 px-5 text-primaryColor">
          Contact Us
        </button>
      </div>

      {/* Mobile View */}
      <div className="max-w-screen-xl mx-auto w-full  flex lg:hidden items-center justify-between h-[80px] p-3">
        <Image
          src={"/logo.png"}
          alt="logo"
          className=""
          width={140}
          height={50}
        />

        <div>
          <IoMenu className="" size={30} />
        </div>
      </div>
    </div>
  );
};

export default Nav;
