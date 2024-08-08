import React from "react";
import { IoClose } from "react-icons/io5";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { IoIosHome } from "react-icons/io";

const MemberModal = ({ close }) => {
  return (
    <div className=" h-full w-[300px]  md:w-[600px] pt-3 px-2 ">
      <IoClose
        onClick={() => close(false)}
        size={23}
        className="absolute top-2 right-2 text-[#475467] cursor-pointer"
      />
      <div className="flex flex-col md:flex-row items-start md:justify-between">
        <div>
          <h1 className="text-[#475467] text-3xl font-bold">
            Reo George{" "}
            <span className="text-[#6679] font-[400] text-xl ps-2">#1024</span>
          </h1>
          <span className="text-[#475467] font-[550] text-lg">UI Designer</span>
        </div>
        <div className="bg-[#E3000F] text-white px-3 text-xs mt-2 p-1">
          <h1>Payment due from 21 / 07</h1>
        </div>
      </div>
      
      <div className="flex gap-3 items-center justify-start mt-5">
        <HiBuildingOffice2 size={25} />
        <h1 className="text-[#191E24] text-xl font-semibold">
          Qmark Technolabs
        </h1>
      </div>

      <hr className="mt-5 mb-3 text-black border-dashed border-2" />

      <div>
        <h1 className="text-2xl font-[500] text-[#6D6D6D]">Contact Details</h1>

        <div className="mt-5 grid grid-cols-1 lg:grid-cols-2">
          <div className="flex gap-3 items-center justify-start mb-3">
            <MdMarkEmailUnread size={18}/>
            <h1 className="text-sm text-black  font-[500]">
              re03george@gmail.com
            </h1>
          </div>
          <div className="flex gap-3 items-center justify-start mb-3">
            <MdMarkEmailUnread size={18}/>
            <h1 className="text-sm text-black  font-[500]">
              re03george@gmail.com
            </h1>
          </div>
          <div className="flex gap-3 items-center justify-start mb-3">
            <FaPhone size={18}/>
            <h1 className="text-sm  text-black font-[500]">+91 7356924029</h1>
          </div>
          <div className="flex gap-3 items-center justify-start mb-3">
            <FaPhone size={18}/>
            <h1 className="text-sm  text-black font-[500]">+91 7356924029</h1>
          </div>
        </div>
        <div className="flex gap-3 items-start md:items-center justify-start mb-3">
          <IoIosHome size={20}/>
          <h1 className="truncate text-wrap text-sm text-black font-[500]">
            45 Mahatma Gandhi Road Bengaluru, Karnataka 560001
          </h1>
        </div>
      </div>
    </div>
  );
};

export default MemberModal;
