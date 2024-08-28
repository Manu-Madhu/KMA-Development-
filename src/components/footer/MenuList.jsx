import Link from "next/link";
import React from "react";

const MenuList = ({ data }) => {
  return (
    <div>
      <h1 className="uppercase text-[#1B1819]/50 text-[14px] font-bold">{data?.heading}</h1>
      <ul className="mt-5 flex flex-col ">
        {data?.subList.map((data) => (
          <li className="text-[15px] text-[#1B1819]" key={data?._id}>
            <Link href={data?.path} >{data?.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuList;
