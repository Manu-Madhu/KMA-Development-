"use client";
import React, { useEffect, useRef, useState } from "react";

const KmaVideo = () => {
  const videoRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true); // When the video is in the viewport
          } else {
            setIsInView(false); // When the video is out of the viewport
          }
        });
      },
      { threshold: 0.5 } // Adjust threshold to when the effect should start
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div className="lg:w-screen lg:h-screen overflow-hidden">
      <div
        ref={videoRef}
        className={`transition-all duration-1000 ease-in-out ${
          isInView ? "lg:w-screen lg:h-screen p-3" : "lg:w-[1280px] lg:h-[720px] "
        } mx-auto`}
      >
        <video autoPlay muted loop className="object-cover w-full h-full rounded-2xl">
          <source
            src="https://firebasestorage.googleapis.com/v0/b/kmaassets-afcf8.appspot.com/o/videoplayback.mp4?alt=media&token=b9bbe77d-737f-433a-9c66-0990fc4fd67b"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
};

export default KmaVideo;
