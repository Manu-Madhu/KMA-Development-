import React from "react";
import IconCard from "./IconCard";
import Image from "next/image";
import MenuList from "./MenuList";

import { FaArrowRightLong } from "react-icons/fa6";
import { FooterData, icon } from "@/data/Fotter";

const Footer = () => {
  return (
    <>
      {/* top side */}
      <div className="flex flex-col md:flex-row max-w-screen-xl mx-auto p-3 pb-5 my-10 h-fit md:h-[300px]">
        <div className="flex flex-col items-start justify-between w-full md:w-2/5">
          <div className="top">
            <Image
              src={"/logo.png"}
              alt="logo"
              className=""
              width={140}
              height={50}
            />
          </div>
          <div className="bottom w-full md:w-3/5 mt-5 md:mt-0">
            <p className="text-xs truncate">
              Management House, Kerala Management Avenue, <br />
              Panampilly Nagar PO, Kochi - 682036
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start justify-between w-full md:w-4/6 mt-5 md:mt-0 ">
          <div className="top flex flex-wrap gap-5 md:flex-row justify-start md:justify-between w-full">
            {FooterData.map((data) => (
              <MenuList data={data} key={data?._id} />
            ))}
          </div>
          <div className="bottom flex gap-2 w-full md:justify-end mt-3">
            {icon.map((data) => (
              <IconCard data={data} key={data?._id} />
            ))}
          </div>
        </div>
      </div>

      {/* Red Part */}
      <div className="bg-primaryColor ">
        <div className="max-w-screen-xl mx-auto w-full p-3 text-white py-10">
          <div className="flex flex-col md:flex-row w-full ">
            <div className="w-full">
              <h1 className="pb-5 md:py-5 text-white text-2xl  font-bold ">
                If you didn’t find what you <br /> are looking for or have
                questions?
              </h1>
            </div>
            <div className="w-full">
              <h5 className="text-xs ">
                Just send us your contact email and we will contact you.
              </h5>
              <div className="w-full relative">
                <input
                  type="email"
                  required
                  className=" mt-3 border border-white/50 rounded-lg bg-transparent w-full md:w-3/4 p-3 text-white text-xs focus:outline-none placeholder:text-white/60"
                  placeholder="YOUR EMAIL"
                />
                <FaArrowRightLong className="absolute right-5 md:right-44 bottom-3" />
              </div>
            </div>
          </div>
          <div className="flex w-full justify-between text-xs font-[200] mt-5">
            <h1>© 2023 — Copyright</h1>
            <h1>Privacy</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
