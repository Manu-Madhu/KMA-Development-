"use client";
import Image from "next/image";
import React from "react";
import { IoSearchOutline } from "react-icons/io5";

const AdminNav = () => {
  return (
    <main className="flex items-center justify-start p-3 md:p-5 md:px-8 border-b-2">
      <div className="w-[250px] md:w-[500px] ">
        <Image
          width={185}
          height={110}
          src="/assets/admin/logo.png"
          alt="logo"
          className="h-12 object-contain "
        />
      </div>
      <div className="w-full text-[25px] font-semibold text-[#474747]">
        Home
      </div>
      <div className="flex items-center justify-end md:w-1/6 md:gap-4 ">
        <IoSearchOutline size={22} className="cursor-pointer hidden md:block" />
        <Image
          width={22}
          height={22}
          src="/assets/admin/menuIcon.png"
          alt="ProfileImage "
          className="object-contain cursor-pointer hidden md:block"
        />
        <Image
          width={35}
          height={35}
          src="/assets/admin/profile.png"
          alt="ProfileImage "
          className="object-contain border-2 border-black/20 rounded-full w-20 md:w-10"
        />
      </div>
    </main>
  );
};

export default AdminNav;
