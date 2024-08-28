"use client";

import Image from "next/image";
import React, { useState } from "react";

import img1 from "../../../../public/assets/about/history_img_1.png";
import img2 from "../../../../public/assets/about/history_img_2.png";
import img3 from "../../../../public/assets/about/history_img_3.png";
import img4 from "../../../../public/assets/about/history_img_4.png";
import img5 from "../../../../public/assets/about/history_img_5.png";

const RotateGallery = () => {
  const data = [
    {
      year: "1977",
      image: img1,
      title: `Mr Robert Dunning, Mr Alan Reader and Mr N V Rangaswamy Feb 1978`,
    },
    {
      year: "1978",
      image: img2,
      title: `Mr Robert Dunning, Mr Alan Reader and Mr N V Rangaswamy Feb 1978`,
    },
    {
      year: "1979",
      image: img3,
      title: `Mr Robert Dunning, Mr Alan Reader and Mr N V Rangaswamy Feb 1978`,
    },
    {
      year: "1980",
      image: img4,
      title: `Mr Robert Dunning, Mr Alan Reader and Mr N V Rangaswamy Feb 1978`,
    },
    {
      year: "1981",
      image: img5,
      title: `Mr Robert Dunning, Mr Alan Reader and Mr N V Rangaswamy Feb 1978`,
    },
  ];

  const [rotated, setRotated] = useState([...data]);

  const skipper = () => {
    const newData = [...rotated];
    newData.push(newData.shift());
    console.log({ newData });
    setRotated(newData);
  };

  return (
    <div className="w-full h-[100vh] bg-[#000000] relative flex flex-col items-center ">
      <h1
        className="tracking-[10px] sm:tracking-[50px] text-white text-[60px] sm:text-[120px] xl:text-[200px] font-light
            absolute bottom-[10vh] xl:top-[26vh] z-40"
      >
        {" "}
        {rotated[0]?.year}{" "}
      </h1>

      <div className="w-fit h-fit flex flex-col items-center gap-4 absolute sm:right-[12vw] top-[8vh] sm:top-[18vh] z-30">
        <Image
          src={rotated[0]?.image}
          alt="image"
          className="w-[360px] h-[360px] object-cover rounded-full"
        />

        <p className="text-white w-[30ch] text-center"> {rotated[0]?.title} </p>
      </div>

      <div className=" hidden w-fit h-fit sm:flex flex-col items-center gap-4 absolute sm:left-[8vw] top-[26vh] blur-[1px] z-20 ">
        <Image
          src={rotated[1]?.image}
          alt="image"
          className="w-[240px] h-[240px] object-cover rounded-full"
        />

        <p className=" text-white w-[30ch] text-center">
          {" "}
          {rotated[1]?.title}{" "}
        </p>
      </div>

      <div className="hidden w-fit h-fit sm:flex flex-col items-center gap-4 absolute sm:right-[37vw] top-[34vh]  blur-[2px] z-10 ">
        <Image
          src={rotated[2]?.image}
          alt="image"
          className="w-[140px] h-[140px] object-cover rounded-full"
        />

        <p className=" text-white w-[30ch] text-center">
          {" "}
          {rotated[2]?.title}{" "}
        </p>
      </div>

      <div className="hidden w-fit h-fit sm:flex flex-col items-center gap-4 absolute sm:left-[24vw] top-[38vh]  blur-sm z-0 ">
        <Image
          src={rotated[3]?.image}
          alt="image"
          className="w-[80px] h-[80px] object-cover rounded-full"
        />

        <p className=" text-white w-[30ch] text-center">
          {" "}
          {rotated[3]?.title}{" "}
        </p>
      </div>

      <button
        onClick={skipper}
        className="buttonAnimation overflow-hidden w-fit z-40 bg-black text-primaryColor border-2 border-[#FFFFFF]/20 rounded-full p-2  lg:px-6 absolute bottom-8  "
      >
        <span>Skip</span>
      </button>
    </div>
  );
};

export default RotateGallery;
