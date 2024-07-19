import Link from "next/link";
import React from "react";

const MenuList = ({ data }) => {
  return (
    <div>
      <h1 className="uppercase text-[#1B1819]/50 text-sm font-bold">{data?.heading}</h1>
      <ul className="mt-5 flex flex-col gap-1">
        {data?.subList.map((data) => (
          <li className="text-sm font-medium" key={data?._id}>
            <Link href={data?.path}>{data?.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuList;
