import Image from "next/image";
import Link from "next/link";
import React from "react";
import wavynet from "../../../../public/assets/home/wavynet.png";

function PageEndQuery({ heading, subheading, button }) {
  return (
    <div className="w-full mt-5 h-[300px] sm:h-screen relative flex items-center justify-center">
      <Image
        src={wavynet}
        alt=""
        fill
        className="z-0 object-fill"
        quality={100}
      />
      <div className="w-full h-full flex flex-col items-center justify-center absolute">
        <h1 className="text-[2.4rem] max-md:text-2xl font-bold leading-[3.5rem] max-md:leading-7 text-center ">
          {heading}
        </h1>
        <p className="text-center text-xs lg:text-sm mt-3">{subheading}</p>
        <div className="relative me-36 w-full flex items-center justify-center">
          <Link href={button?.path || ""} className=" ">
            <button
              className="buttonAnimation overflow-hidden  absolute truncate px-6 py-2 mt-8 bg-white border text-sm
            border-black/10 w-fit rounded-full font-[400] lg:font-semibold text-red-600"
            >
              <span>{button?.title}</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PageEndQuery;
