import React from "react";
import StatsCard from "./StatsCard";
import { home_stats } from "../../../data/home_stats";
function Stats() {
  return (
    <div className="lg:mt-40">
    <div className="max-w-screen-xl mx-auto w-full md:my-14 border border-gray-400 rounded-2xl flex max-md:flex-col gap-4 justify-center bg-[#F2F2F2] p-3 lg:p-0 my-10 ">
      {/* <div className="border border-gray-400 rounded-2xl flex max-md:flex-col max-md:gap-8 justify-around bg-[#F2F2F2]"> */}
        
        {home_stats.map((stat, index) => (
          <StatsCard key={index} title={stat.title} value={stat.value} />
        ))}

      {/* </div> */}
    </div>
    </div> 
  );
}

export default Stats;
