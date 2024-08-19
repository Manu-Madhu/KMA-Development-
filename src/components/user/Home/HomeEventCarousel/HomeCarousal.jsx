'use client'
import React, { useRef } from 'react';
import EventCard from '../../Common/EventCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import './HomeCarousel.css'; // Import the custom CSS file
import { events } from '@/data/events';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';

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
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

function HomeCarousel() {
    const carouselRef = useRef(null);

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

    return (
        <div className=' relative '>
            <span className=" z-40 cursor-pointer absolute top-0 left-4 bottom-0 w-fit h-full flex items-center " onClick={handlePrev} >
                <BsArrowLeftCircleFill size={28} color="#E3000F" />
            </span>

            <span className=" z-40 cursor-pointer absolute top-0 right-4 bottom-0 w-fit h-full flex items-center " onClick={handleNext} >
                <BsArrowRightCircleFill size={28} color="#E3000F" />
            </span>

            <div className='w-11/12 mx-auto'>
                <Carousel
                    ref={carouselRef}
                    responsive={responsive}
                    showDots
                    infinite
                    arrows={false}
                    renderDotsOutside
                    dotListClass="custom-dot-list"
                >
                    {
                        events.map((event, index) => (
                            <EventCard
                                key={index}
                                Name={event.name}
                                Title={event.title}
                                Description={event.description}
                                Location={event.location}
                            />
                        ))
                    }
                </Carousel>

            </div>


            {/* <button
                onClick={handleNext}
                className="max-md:hidden bg-red-600 p-2 rounded-full text-white absolute -right-12 top-1/2 transform -translate-y-1/2 z-20"
            >
                <FaArrowRight size={21} />
            </button> */}

        </div>
    );
}

export default HomeCarousel;
