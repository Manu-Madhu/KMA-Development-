'use client'
import React, { useRef } from 'react';
import EventCard from '../../Common/EventCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import './HomeCarousel.css'; // Import the custom CSS file

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 3
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

    const CustomDot = ({ onClick, ...rest }) => {
        const { onMove, index, active } = rest;
        return (
            <button
                className={`custom-dot ${active ? 'custom-dot--active' : ''}`}
                onClick={() => onClick()}
            />
        );
    };

    return (
        <div className="relative">
            <button
                onClick={handlePrev}
                className="bg-red-600 p-2 rounded-full text-white absolute -left-12 top-1/2 transform -translate-y-1/2 z-20"
            >
                <FaArrowLeft size={21} />
            </button>
            <Carousel
                ref={carouselRef}
                responsive={responsive}
                showDots
                infinite
                arrows={false}
                renderDotsOutside
                customDot={<CustomDot />}
                centerMode={true} // Enable center mode
                partialVisible={false} // Ensure full visibility of the center item
                containerClass="carousel-container"
                itemClass="carousel-item"
            >
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
            </Carousel>
            <button
                onClick={handleNext}
                className="bg-red-600 p-2 rounded-full text-white absolute -right-12 top-1/2 transform -translate-y-1/2 z-20"
            >
                <FaArrowRight size={21} />
            </button>
        </div>
    );
}

export default HomeCarousel;
