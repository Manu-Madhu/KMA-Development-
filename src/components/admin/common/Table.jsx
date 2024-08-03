"use client";

import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { FiEyeOff } from "react-icons/fi";
import { MdOutlineDelete } from "react-icons/md";
import ModalFrame from "./ModalFram";
import MemberModal from "../members/MemberModal";

const Table = ({ data }) => {
  const [detailedView, setDetailedView] = useState(false);

  const setModalHandler = () => {
    setDetailedView(!detailedView);
  };
  return (
    <main className="border-2 border-[#F1616C] overflow-x-scroll rounded-xl m-3 mb-10">
      <table className="w-full max-md:w-fit text-base table overflow-x-scroll">
        <thead className="">
          <tr className="bg-[#E3000F]/20 text-[#9F444A]">
            <th className="pl-5 text-start py-3 font-normal max-md:text-sm border">
              Sno.
            </th>
            <th className="px-5 text-start py-3 font-normal max-md:text-sm  border">
              Name
            </th>
            <th className="px-5 text-start py-3 font-normal max-md:text-sm  border">
              Organization
            </th>
            <th className="px-5 text-start py-3 font-normal max-md:text-sm  border">
              Status
            </th>
            <th className="px-5 text-start py-3 font-normal max-md:text-sm w-[10%] border">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item?.id} className=" border-gray-400">
              <td className="pl-5 p-3 border">{item?.id}</td>
              <td className="px-5 p-3 border">{item?.name}</td>
              <td className="px-5 p-3 border">{item?.Organization}</td>
              <td className="px-5 p-3 border">{item?.status}</td>
              <td className="px-5 p-3 border">
                <div className="flex gap-3 text-secondary/70">
                  <FaEdit
                    onClick={setModalHandler}
                    size={22}
                    className="cursor-pointer"
                  />
                  <IoEyeOutline size={22} className="cursor-pointer" />
                  {/* <FiEyeOff /> */}
                  <MdOutlineDelete size={22} className="cursor-pointer" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {detailedView && (
        <ModalFrame>
          <MemberModal close={setDetailedView} />
        </ModalFrame>
      )}
    </main>
  );
};

export default Table;
