import React from "react";
import UnderlinedHeading from "../Common/UnderlinedHeading";
import AwardsCard from "./AwardsCard";
import { awards } from "@/data/awards";

function AwardsAndRecognitions() {
  return (
    <div className="max-w-screen-xl min-h-screen mx-auto p-3 mb-20">
      <UnderlinedHeading heading="Our " text="Awards" />
      <div className="mt-10 lg:mt-16 grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 w-full gap-4">
        {awards.map((history, index) => (
          <AwardsCard
            key={index}
            title={history.title}
            description={history.description}
            image={history.image}
          />
        ))}
      </div>
    </div>
  );
}

export default AwardsAndRecognitions;
