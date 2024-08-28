import React from "react";

const BenefitCard = ({ bgcolor, activeIndex, index, icon, title, content }) => {
  return (
    <div
      className={`transition-all duration-1000 ease-in-out  ${bgcolor} p-8 flex flex-col gap-3 text-white  rounded-2xl ${
        index === activeIndex
          ? "lg:w-[100vw] h-[300px]"
          : "lg:w-[300px] h-[300px]"
      }`}
    >
      {icon}
      <h2 className="text-xl">{title}</h2>
      <p className="w-64">{content}</p>
    </div>
  );
};

export default BenefitCard;
