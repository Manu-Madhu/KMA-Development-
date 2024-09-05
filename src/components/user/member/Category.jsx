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
          content={
            <>
              <p className="mb-2 ">
                An individual possessing a University Degree and having
                managerial experience of at least 3 years in an
                industrial/commercial/service enterprise, Government/armed
                forces or having 3 years experience in teaching management
                subjects in a reputed educational institution may be considered
                for individual membership, provided that an individual who falls
                short of the prescribed qualification may also be considered for
                membership if he/she has at least 10 years managerial experience
                as above and fulfills all other requirements. In exceptional
                cases the above requirements may be waived at the discretion of
                the Managing Committee.
              </p>
              <p className="mb-2 ">
              A Professional Individual Member (PIM) of AIMA (Fellow, Member and Associate Member) whose area of activity falls within the jurisdiction of KMA will automatically become a Member of the Association.
              </p>
            </>
          }
          isOpen={openIndex === 1}
          onClick={() => toggleAccordion(1)}
        />
        <AccordionItem
          title="Associate Individual Membership"
          content={
            <>
              <p className="mb-2 ">
              An individual who is working in the managerial cadre in the corporate sector, or his own business of considerable magnitude, but does not have sufficient years of experience to qualify for Ordinary Individual Membership can take up Associate Individual Membership of KMA. He will not however have any voting right.
              </p>
            </>
          }
          isOpen={openIndex === 2}
          onClick={() => toggleAccordion(2)}
        />
        <AccordionItem
          title="Student Membership"
          content={
            <>
              <p className="mb-2 ">
              An individual who has attained the age of 18 years and is a student of management at the Graduate or Postgraduate level in a recognized institution is eligible to become a Student Member. He should not be employed or in own business. He will not have any voting right.
              </p>
            </>
          }
          isOpen={openIndex === 3}
          onClick={() => toggleAccordion(3)}
        />
        <AccordionItem
          title="Life Membership"
          content={
            <>
              <p className="mb-2 ">
              All those who are eligible to become Ordinary Individual Members shall be eligible for enrolment as Life Members of the Association if they pay the entrance fee and 10 times the prevailing Annual Subscription as a lump sum payment.
              </p>
              <p className="mb-2 ">
              Those individual who had completed 60 years of age are eligible for Senior Life Membership of the Association, if they pay the entrance fee and 5 times the prevailing Annual subscription as a lump sum payment.
              </p>
            </>
          }
          isOpen={openIndex === 4}
          onClick={() => toggleAccordion(4)}
        />
        <AccordionItem
          title="Startup Membership"
          content={
            <>
              <p className="mb-2 ">
              Startup Member: A Private Limited Company/ LLP/ Partnership Firm registered with the Union Ministry of Commerce and Industry and KSUM as a start-up entity, within five years of its registration as a start-up, for a period of three years.
              </p>
            </>
          }
          isOpen={openIndex === 5}
          onClick={() => toggleAccordion(5)}
        />
      </div>
    </div>
  );
};

export default Category;
