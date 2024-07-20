import Link from "next/link";
import React from "react";

const IconCard = ({ data }) => {
  return (
    <Link href={data?.path}>
      <div className="bg-white p-2 rounded-full shadow">
        <div className="text-primaryColor">{data?.icon}</div>
      </div>
    </Link>
  );
};

export default IconCard;
