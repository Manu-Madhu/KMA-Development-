"use client";
import React, { useState } from "react";
import UnderlinedHeading from "../Common/UnderlinedHeading";

const AccordionItem = ({ title, content, isOpen, onClick, isHighlighted }) => (
  <div className="  border-gray-200 ">
    <h2>
      <button
        type="button"
        className={`flex items-center justify-between w-full p-5 font-medium border border-gray  ${
          isHighlighted
            ? "text-primaryColor bg-primaryColor bg-opacity-5"
            : "text-[#181818] "
        }`}
        onClick={onClick}
      >
        <span className="font-bold">{title}</span>
        <svg
          className={`w-3 h-3 transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5 5 1 1 5"
          />
        </svg>
      </button>
    </h2>
    {isOpen && <div className="p-5 border border-gray-200 ">{content}</div>}
  </div>
);

const Category = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-screen-xl p-3 pt-10 mx-auto">
      <div className="mb-10">
        <UnderlinedHeading heading={"Categories of"} text={"Membership"} />
      </div>
      <div className="mb-10">
        <AccordionItem
          title="Organization Membership"
          content={
            <>
              <p className="mb-2 ">
                An Organisational Member shall consist of any firm or company
                engaged in trade, commerce or industry. Organisation Members can
                be of 2 classes.
              </p>
              <ul className="ps-5 list-disc">
                <li className="text-xs">
                  Corporate Members (eligible to nominate four representatives
                  for KMA programmes).
                </li>
                <li className="text-xs">
                  Associate Corporate Members (eligible to nominate two
                  representatives for the programme of the Association)
                </li>
              </ul>
            </>
          }
          isOpen={openIndex === 0}
          onClick={() => toggleAccordion(0)}
          isHighlighted={true} // Highlight the first accordion item
        />
        <AccordionItem
          title="Individual Membership"
          isOpen={openIndex === 1}
          onClick={() => toggleAccordion(1)}
        />
        <AccordionItem
          title="Associate Individual Membership"
          isOpen={openIndex === 2}
          onClick={() => toggleAccordion(2)}
        />
        <AccordionItem
          title="Student Membership"
          isOpen={openIndex === 3}
          onClick={() => toggleAccordion(3)}
        />
        <AccordionItem
          title="Life Membership"
          isOpen={openIndex === 4}
          onClick={() => toggleAccordion(4)}
        />
        <AccordionItem
          title="Startup Membership"
          isOpen={openIndex === 5}
          onClick={() => toggleAccordion(5)}
        />
      </div>
    </div>
  );
};

export default Category;
