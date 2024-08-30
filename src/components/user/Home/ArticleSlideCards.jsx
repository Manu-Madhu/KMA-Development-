"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import cover from "../../../../public/assets/about/about1.png";
import Link from "next/link";
import axios from "@/axios-folder/axios";

import { articleRoute, publicationsRoute } from "@/utils/Endpoint";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { BsArrowRightCircleFill } from "react-icons/bs";

const ArticleSlideCards = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [data, setData] = useState([1, 1, 1, 1]);
  const [loadingData, setLoading] = useState(true);

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
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    centerMode: true,
    beforeChange: (oldI, newI) => setSlideIndex(newI),

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
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

  // Date conversion function
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

  // article data fetching
  const getArticleData = useCallback(() => {
    axios
      .get(articleRoute)
      .then((res) => {
        console.log(res?.data?.articles);
        setData(res?.data?.articles);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {});
  }, []);

  // initial time data fetching
  useEffect(() => {
    getArticleData();
  }, []);

  console.log(data);

  return (
    <div className="w-full py-10 lg:py-12">
      <h1 className="my-8 lg:my-14 leading-[3.5rem] max-md:leading-9 text-center text-title font-bold mx-auto w-fit mb-12 max-md:text-[2rem]">
        Latest{" "}
        <span className="relative ml-3">
          Articles
          <Image
            width={500}
            height={500}
            src={"/assets/kma csr awards/Vector.png"}
            className="absolute right-0 -bottom-2"
            alt="Vector"
          />
        </span>
      </h1>

      <div className=" mx-auto slider-container relative p-3 lg:pt-5">
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
        >
          {data?.map((item, index) => (
            <div
              key={index}
              className={`w-full h-[300px] sm:h-[350px] relative rounded-2xl overflow-clip
                      ${index === slideIndex ? "slide slide-active" : "slide"}
                      `}
            >
              {item?.coverImageUrl ? (
                <img
                  src={item?.coverImageUrl}
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
                className="absolute bottom-0 w-full h-[80px] flex justify-between 
                  items-center p-4 bg-[#2A282F] backdrop-blur-[5px]"
              >
                <div className="flex flex-col">
                  <span className="text-[#FF5C67] text-sm">
                    {formatDate(item?.createdAt)}
                  </span>
                  <span className="text-white">{item?.title}</span>
                </div>

                <Link href={`/articles/${item?._id}`}>
                  <button className="bg-white text-sm text-black  rounded-2xl py-2 px-6">
                    View
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </Slider>

        <span
          className=" z-40 cursor-pointer absolute top-0 left-4 bottom-0 w-fit h-full flex items-center  "
          onClick={previous}
        >
          <BsArrowLeftCircleFill size={28} color="#E3000F" />
        </span>

        <span
          className=" z-40 cursor-pointer absolute top-0 right-4 bottom-0 w-fit h-full flex items-center  "
          onClick={next}
        >
          <BsArrowRightCircleFill size={28} color="#E3000F" />
        </span>
      </div>

      <div className="flex justify-center lg:my-5 relative pe-32">
        <Link href={"/articles"}>
          <button className="buttonAnimation overflow-hidden absolute mx-auto px-6 py-2 mt-12 border border-black/20 w-fit rounded-full font-semibold text-red-600">
            <span>View All</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ArticleSlideCards;
