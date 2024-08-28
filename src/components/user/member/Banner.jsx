import React from "react";
import Image from "next/image";
import UnderlinedHeading from "../Common/UnderlinedHeading";

const Banner = () => {
  return (
    <div className=" mt-20">
      <div className="relative">
        {/* Container for the text and underlined heading */}
        <div className="absolute inset-0 flex flex-col items-center justify-start pt-10 text-black z-10">
          <h1 className="text-[2.8rem] max-md:text-4xl font-bold leading-[3.2rem] text-center">
            {`Choose Growth`}
          </h1>
          <UnderlinedHeading heading={"Become a KMA"} text={"Member"} />
        </div>

        {/* Image */}
        <Image
          src="/membermain.png"
          width={500}
          height={500}
          className="object-cover w-full"
          alt="Banner
          Image "
        />
        <div className="px-6 mb-10 max-w-screen-xl p-3 pt-10 mx-auto">
          <p className="text-base sm:text-[16px] text-justify leading-relaxed text-[#1F392C]">
            KMA provides a host of services to meet the growth needs of the
            Managers. KMA Membership offers many benefits. Members will be able
            to interact with others and enrich their experiences by
            participating. in a variety of programmes like Lecture Meetings, Panel
            Discussions, Seminars and Training Workshops etc. organized by the
            Association.
            <br />
            If you are not already a member of KMA, why not consider becoming
            one by filling in the membership form? The best benefit that a
            member derives by joining the KMA is the innumerable opportunities
            that are available to him for interaction with the managerial
            community from this part of the State.
            <br />
            There are different types of Membership offered by KMA such as
            Corporate and Associate Corporate Membership, Ordinary Individual
            and Associate Individual Membership, Student Membership etc.
            The current membership strength is over 1500, including about
            230 Institutional Members.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
