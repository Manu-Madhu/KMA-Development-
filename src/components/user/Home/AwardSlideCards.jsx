'use client'
import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import cover from "../../../../public/assets/about/about1.png"
import Link from "next/link";

import { BsArrowLeftCircleFill } from "react-icons/bs";
import { BsArrowRightCircleFill } from "react-icons/bs";

const AwardSlideCards = () => {
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
        dots: true,
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
                    dots: true
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

        <div className='w-full h-[240px] sm:h-[280px] relative my-24'>
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
                                className={`w-full h-[200px] sm:h-[250px] rounded-2xl
                                    bg-gradient-to-r from-[#E83F4A] to-[#F5828A] "
                                ${index === slideIndex ? 'slide slide-active' : 'slide'}
                                flex flex-col p-4 text-white
                                `}
                            >

                                <span className="w-8 h-8 rounded-full bg-white text-primaryColor 
                                   flex items-center justify-center text-lg font-bold">
                                    {index + 1}
                                </span>

                                <p className="mt-6">KMA CSR Award 2024</p>

                                <p className="mt-6">KMA CSR Award 2024 for recognising exceponal Corporate Social Responsibility (CSR)
                                    Projects in each of the following CSR themes:</p>
                            </div>

                        ))

                    }

                </Slider>

            </div>

            <span className=" z-40 cursor-pointer absolute top-[100px] sm:top-[125px] left-4  " onClick={previous} >
                <BsArrowLeftCircleFill size={28} color="#E3000F" />
            </span>
            <span className=" z-40 cursor-pointer absolute top-[100px] sm:top-[125px] right-4" onClick={next} >
                <BsArrowRightCircleFill size={28} color="#E3000F" />
            </span>
        </div>

    )
}

export default AwardSlideCards