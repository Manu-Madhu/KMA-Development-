import React from "react";

const HallTable = ({ data }) => {
  return (
    <main className="border-2 border-[#F1616C] overflow-x-scroll rounded-xl m-3 mb-10">
      <table className="w-full max-md:w-fit text-base table overflow-x-scroll">
        <thead className="">
          <tr className="bg-[#E3000F]/20 text-[#9F444A]">
            <th className="pl-5 text-start py-3 font-normal max-md:text-sm border">
              Sno.
            </th>
            <th className="px-5 text-start py-3 font-normal max-md:text-sm  border">
              Hall
            </th>
            <th className="px-5 text-start py-3 font-normal max-md:text-sm  border">
              Name
            </th>
            <th className="px-5 text-start py-3 font-normal max-md:text-sm  border">
              Email
            </th>
            <th className="px-5 text-start py-3 font-normal max-md:text-sm w-[10%] border">
              Phone
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            <tr key={item?.id} className=" border-gray-400">
              <td className="pl-5 p-3 border">{item?.id}</td>
              <td className="px-5 p-3 border">{item?.hall}</td>
              <td className="px-5 p-3 border">{item?.name}</td>
              <td className="px-5 p-3 border">{item?.email}</td>
              <td className="px-5 p-3 border">{item?.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default HallTable;
