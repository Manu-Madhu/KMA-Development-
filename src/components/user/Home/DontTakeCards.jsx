"use client";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import cover from "../../../../public/card.png";

import { ImQuotesLeft } from "react-icons/im";

import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

const DontTakeCards = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [data, setData] = useState([1, 1, 1, 1, 1, 1]);
  const [loading, setLoading] = useState(true);

  let sliderRef = useRef(null);
  const next = () => {
    sliderRef?.slickNext();
  };
  const previous = () => {
    sliderRef?.slickPrev();
  };

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 2,
    initialSlide: 0,
    centerMode: true,
    beforeChange: (oldI, newI) => setSlideIndex(newI),

    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  function formatDate(createdAt) {
    const date = new Date(createdAt);
    let formattedDate = null;
    if (!isNaN(date)) {
      const day = String(date.getUTCDate()).padStart(2, "0");
      const month = String(date.getUTCMonth() + 1).padStart(2, "0");
      const year = date.getUTCFullYear();
      formattedDate = `${day}/${month}/${year}`;
      return formattedDate;
    }
    return "";
  }

  return (
    <div className="w-full lg:py-12 relative ">

      <h1 className="my-8 lg:my-14 lg:leading-[3.5rem] leading-[45px]  text-title max-md:text-[2.2rem] font-bold mx-auto w-fit mb-8 text-center capitalize p-3">
        Don't take our{" "}
        <span className="relative ml-3">
          word for it
          <Image
            width={500}
            height={500}
            src={"/assets/kma csr awards/Vector.png"}
            className="absolute right-0 -bottom-2 max-md:-bottom-1 w-full h-4 max-md:h-2"
            alt="Vector"
          />
        </span>
      </h1>

      <div className=" mx-auto slider-container relative p-3 lg:p-0 lg:pt-5 lg:mt-8 ">
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
        >
          {data?.map((item, index) => (
            <div
              key={index}
              className={`w-[500px] h-[300px] sm:h-[350px] relative rounded-2xl overflow-hidden
                      ${
                        index === slideIndex
                          ? "slide-active"
                          : index === slideIndex - 1 ||
                            index === slideIndex + 1 ||
                            (slideIndex === 0 && index === data.length - 1) ||
                            (slideIndex === data.length - 1 && index === 0)
                          ? "slide-btw"
                          : "slide"
                      }
                      `}
            >
              <div className="absolute w-full  h-ful bg-black top-0 left-0 "></div>
              {item?.thumbnail?.location ? (
                <Image
                  src={item?.thumbnail?.location}
                  alt="image"
                  className="w-full h-full object-cover "
                />
              ) : (
                <Image
                  src={cover}
                  alt="image"
                  className="w-full h-full object-cover "
                />
              )}

              <div
                className="absolute top-0 w-full h-full flex flex-col
                  items-start text-white px-5 justify-around "
              >
                <ImQuotesLeft
                  size={56}
                  className={`absolute top-3 ${
                    index === slideIndex ? "text-red-600" : "text-white"
                  }`}
                />

                <div className="absolute bottom-5 flex flex-col items-start">
                  <p className="text-lg mb-5 font-[300] leading-6">
                    Overall, I had a great experience at KMA Hall. The
                    facilities are excellent, the location is convenient, and
                    the staff is friendly and helpful.
                  </p>

                  <span className="text-sm font-[500]">P V Ravindran</span>
                  <span className="text-xs font-light">
                    Manager of XYZQWRT company
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="my-6 flex justify-center gap-4">
        <MdKeyboardArrowLeft
          onClick={previous}
          size={28}
          className="cursor-pointer text-[#4B4C4D] "
        />
        <MdKeyboardArrowRight
          onClick={next}
          size={28}
          className="cursor-pointer text-[#4B4C4D] "
        />
      </div>
    </div>
  );
};

export default DontTakeCards;
