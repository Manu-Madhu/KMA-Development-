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

import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

const DontTakeCards = () => {
  const [slideIndex, setSlideIndex] = useState(0)
  const [data, setData] = useState([1, 1, 1, 1, 1, 1 ])
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
    infinite: true,
    speed: 500,
    slidesToShow: 5,
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
  } 

  return (

    <div className='w-full py-12 relative '>

      <h1 className='my-14 text-[2.8rem] max-md:text-[1.5rem] font-bold leading-[3.5rem] max-md:leading-9 text-center'>
        Don't take our {" "}
        <span className='relative mr-3'>
          word for it
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
                      ${index === slideIndex ? 'slide-active' 
                        : ( (index === slideIndex - 1 || index === slideIndex + 1 || (slideIndex === 0 && index === data.length -1)  || (slideIndex === data.length -1 && index === 0) ) 
                        ? 'slide-btw' : 'slide')}
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
                      <span className="text-[#FF5C67] text-sm">Slide Index : {slideIndex}</span>
                      <span className="text-white">index: {index}</span>

                    </div>

                    <button className="bg-white text-sm text-black rounded-2xl py-2 px-6">
                      View
                    </button>
                  
                </div>

              </div>

            ))

          }

        </Slider>

      </div>

      <div className="my-6 flex justify-center gap-4">
        <MdKeyboardArrowLeft onClick={previous} size={28} className="cursor-pointer text-[#4B4C4D] " />
        <MdKeyboardArrowRight onClick={next} size={28} className="cursor-pointer text-[#4B4C4D] " />
      </div>

    </div>

  )
}

export default DontTakeCards