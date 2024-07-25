'use client';
import { presidents } from '@/data/presidents';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
const VerticalScrollProgress = () => {
    const [scrollHeight, setScrollHeight] = useState(0);
    const yearRefs = useRef([]);
    const redDotRef = useRef();
    useEffect(() => {
        const handleScroll = () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            let scrolled = (winScroll / height) * 100;
            scrolled *= 1.5;
            setScrollHeight(scrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const isBubblePassed = (index) => {
        const yearBubble = yearRefs.current[index];
        if (yearBubble) {
            const bubbleRect = yearBubble.getBoundingClientRect();
            const redDotRect = redDotRef.current.getBoundingClientRect();
            const bubbleTop = bubbleRect.top - bubbleRect.height;
            return redDotRect.top >= bubbleTop;
        }
        return false;
    };

    return (
        <div className="relative mb-20">
            <div className="absolute inset-0 max-md:left-10 md:flex justify-center items-center">
                <div className="relative h-full w-1 overflow-y-clip  bg-gray-300">
                    <div
                        className="absolute top-0 left-0 w-1 bg-red-500"
                        style={{ height: `${scrollHeight}%` }}
                    ></div>
                    <div
                        ref={redDotRef}
                        className="absolute inset-x-0 mx-auto w-3 left-[-4px] h-3 mt-2 bg-red-500 rounded-full"
                        style={{ top: `calc(${scrollHeight}% - 6px)` }}
                    ></div>
                </div>
            </div>
            <div className="flex flex-col items-center relative">
                {presidents.map((item, index) => (
                    <div
                        key={index}
                        className="flex max-md:flex-col items-center justify-center my-8 h-44 relative w-full"
                    >
                        <div className="md:absolute max-md:relative md:right-[20%] md:pl-4">
                            <img width={100} height={100} src={`/assets/presidents/${item.img}`} alt={item.name} className="size-44 object-cover rounded-lg" />
                        </div>
                        <div
                            className="md:absolute left-[25%] max-md:mt-2 transform md:pr-4 text-xl font-bold capitalize"
                        >
                            <p>{item.name}</p>
                        </div>
                        <div
                            className="relative max-md:absolute max-md:left-2 z-10 flex flex-col items-center"
                        >
                            <div
                                className={`py-2 px-3 rounded-full flex items-center justify-center ${isBubblePassed(index) ? 'bg-red-500' : 'bg-white border border-gray-400'}`}
                            >
                                <div
                                    ref={el => yearRefs.current[index] = el}
                                    className={` ${isBubblePassed(index) ? "text-white" : "text-red-500"} text-xs font-semibold`}>{item.year}</div>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div >
    );
};

export default VerticalScrollProgress;
