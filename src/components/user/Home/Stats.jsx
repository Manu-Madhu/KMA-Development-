import React from "react";
import StatsCard from "./StatsCard";
import { home_stats } from "../../../data/home_stats";
function Stats() {
  return (
    <div className="max-w-screen-xl mx-auto p-3 w-full md:my-14  ">
      <div className="border border-gray-400 rounded-2xl py-14 max-md:py-10 flex max-md:flex-col max-md:gap-8 justify-around bg-[#F2F2F2]">
        {home_stats.map((stat, index) => (
          <StatsCard key={index} title={stat.title} value={stat.value} />
        ))}
      </div>
    </div>
  );
}

export default Stats;
