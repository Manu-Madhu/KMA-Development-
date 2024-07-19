'use client'
import React, { useRef, useState, useEffect } from 'react';
import EventCard from '../../Common/EventCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import TestimonialCard from './TestimonialCard';

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

function HomeCarousel() {
    const carouselRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(5);

    const handleNext = () => {
        if (carouselRef.current) {
            carouselRef.current.next();
        }
    };

    const handlePrev = () => {
        if (carouselRef.current) {
            carouselRef.current.previous();
        }
    };

    const CustomDot = ({ onClick, ...rest }) => {
        const { onMove, index, active } = rest;
        return (
            <button
                className={`custom-dot ${active ? 'custom-dot--active' : ''}`}
                onClick={() => onClick()}
            />
        );
    };

    const afterChange = (currentSlide) => {
        console.log(currentSlide);
        setCurrentSlide(currentSlide);
    };

    return (
        <div className="relative">
            <button
                onClick={handlePrev}
                className="bg-red-600 p-2 rounded-full text-white absolute left-[40%] bottom-0 transform -translate-y-1/2 z-20"
            >
                <FaArrowLeft size={21} />
            </button>
            <Carousel
                className='py-20 gap-10'
                ref={carouselRef}
                responsive={responsive}
                infinite
                arrows={false}
                centerMode={true}
                partialVisible={false}
                containerClass="carousel-container"
                itemClass="carousel-item"
                initialSlide={0}
                afterChange={afterChange}
            >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => {
                    return <TestimonialCard className={`${i === (currentSlide - 3) % 11 ? "bg-red-400 scale-110" : "opacity-50 bg-gray-500"}`} key={i} i={i} />
                })}
            </Carousel>
            <button
                onClick={handleNext}
                className="bg-red-600 p-2 rounded-full text-white absolute right-[40%] bottom-0 transform -translate-y-1/2 z-20"
            >
                <FaArrowRight size={21} />
            </button>
        </div>
    );
}

export default HomeCarousel;
