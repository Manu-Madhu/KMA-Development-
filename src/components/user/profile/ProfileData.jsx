"use client";
import React from "react";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { IoIosHome } from "react-icons/io";

const ProfileData = ({user}) => {
  return (
    <div className="flex justify-center items-center ">
      <div className=" h-full w-[300px]  md:w-[600px] mt-5 lg:mt-10 justify-center items-center ">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-primaryColor lg:text-2xl font-bold">
              INLM_13433{" "}
            </h1>
            <span className="text-[#475467] font-[550] lg:text-lg">{user?.role}</span>
          </div>
          <div className="bg-[#E3000F] text-white rounded-full px-3 text-xs mt-2 p-2">
            <h1>Active Membership</h1>
          </div>
        </div>

        <div className="flex gap-3 items-center justify-start mt-5">
          <HiBuildingOffice2 size={25} />
          <h1 className="text-[#191E24] text-lg font-semibold">
            Qmark Technolabs Pvt Ltd
          </h1>
        </div>

        <hr className="mt-5 mb-3 border-black opacity-40 border-dashed border-2 " />

        <div>
          <h1 className="text-lg font-[500] text-[#6D6D6D]">Contact Details</h1>

          <div className="mt-5 grid grid-cols-1 lg:grid-cols-2">
            <div className="flex gap-3 items-center justify-start mb-3">
              <MdMarkEmailUnread size={18} />
              <h1 className="text-sm text-black ">{user?.email}</h1>
            </div>
            <div className="flex gap-3 items-center justify-start mb-3">
              <MdMarkEmailUnread size={18} />
              <h1 className="text-sm text-black ">{user?.email}</h1>
            </div>
            <div className="flex gap-3 items-center justify-start mb-3">
              <FaPhone size={18} />
              <h1 className="text-sm  text-black ">{user?.phone}</h1>
            </div>
            <div className="flex gap-3 items-center justify-start mb-3">
              <FaPhone size={18} />
              <h1 className="text-sm  text-black ">{user?.phone}</h1>
            </div>
          </div>
          <div className="flex gap-3 items-start md:items-center justify-start mb-3">
            <IoIosHome size={20} />
            <h1 className="truncate text-wrap text-sm  ">
             {user.address},{user.state},{user.country}
            </h1>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center md:justify-between mt-10">
          <div >
            <h4 className=" text-xs ">Last renewal: 12 June 2023 </h4>
          </div>
          <div className="bg-white cursor-pointer hover:bg-primaryColor hover:text-white ease-in-out duration-200 text-primaryColor rounded-full border border-gray-300 px-5 text-sm mt-2 p-2">
            <h1>Renew now</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileData;
