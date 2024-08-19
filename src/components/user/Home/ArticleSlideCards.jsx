'use client'
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import cover from "../../../../public/assets/about/about1.png"
import Link from "next/link";

import { BsArrowLeftCircleFill } from "react-icons/bs";
import { BsArrowRightCircleFill } from "react-icons/bs";

const ArticleSlideCards = () => {
  const [slideIndex, setSlideIndex] = useState(0)
  const [data, setData] = useState([1, 1, 1, 1])
  const [loading, setLoading] = useState(true)


  let sliderRef = useRef(null);
  const next = () => {
    sliderRef?.slickNext();
  };
  const previous = () => {
    sliderRef?.slickPrev();
  };

  const settings = {
    dots: false,
    arrows:false,
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
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,

        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        }
      }
    ],
  };
  function formatDate(createdAt) {
    const date = new Date(createdAt);
    let formattedDate = null;
    if (!isNaN(date)) {
      const day = String(date.getUTCDate()).padStart(2, '0');
      const month = String(date.getUTCMonth() + 1).padStart(2, '0');
      const year = date.getUTCFullYear();
      formattedDate = `${day}/${month}/${year}`;
      return formattedDate;
    }
    return ''
  } ``
  return (

    <div className='w-full py-12'>

      <h1 className='my-14 text-[2.8rem] max-md:text-[1.5rem] font-bold leading-[3.5rem] max-md:leading-9 text-center'>
        Latest {" "}
        <span className='relative mr-3'>
          Articles
          <Image src={"/assets/kma csr awards/Vector.png"} width={500} height={500} className='absolute right-0 -bottom-2 max-md:-bottom-1 w-full h-4 max-md:h-2' alt='Vector' />
        </span>

      </h1>

      <div className=" mx-auto slider-container relative ">
        <Slider
          ref={slider => {
            sliderRef = slider;
          }}

          {...settings}
        >
          {
            data?.map((item, index) => (
              <div key={index}
                className={`w-full h-[300px] sm:h-[400px] relative rounded-2xl overflow-clip
                      ${index === slideIndex ? 'slide slide-active' : 'slide'}
                      `}
              >
                {
                  item?.thumbnail?.location
                    ?
                    <img
                      src={item?.thumbnail?.location}
                      alt="image"
                      className="w-full h-full object-cover "
                    />
                    :
                    <Image src={cover} alt="image"
                      className="w-full h-full object-cover " />

                }

                <div
                  className="absolute bottom-0 w-full h-[80px] flex justify-between 
                  items-center p-4 bg-[#2A282F] backdrop-blur-lg">

                    <div className="flex flex-col">
                      <span className="text-[#FF5C67] text-sm">21/10/2024</span>
                      <span className="text-white">Article title here</span>

                    </div>

                    <button className="bg-white text-sm text-black rounded-2xl py-2 px-6">
                      View
                    </button>
                  
                </div>

              </div>

            ))

          }

        </Slider>

      <span className=" z-40 cursor-pointer absolute top-0 left-4 bottom-0 w-fit h-full flex items-center  " onClick={previous} >
        <BsArrowLeftCircleFill size={28} color="#E3000F" />
      </span>

      <span className=" z-40 cursor-pointer absolute top-0 right-4 bottom-0 w-fit h-full flex items-center  " onClick={next} >
        <BsArrowRightCircleFill size={28} color="#E3000F" />
      </span>
      </div>


      <div className="flex justify-center my-5">
        <button className='mx-auto px-6 py-2 mt-12 border border-gray-600 w-fit rounded-full font-semibold text-red-600'>
          View All
        </button>

      </div>


    </div>

  )
}

export default ArticleSlideCards