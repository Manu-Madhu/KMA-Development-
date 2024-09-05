"use client";
import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa6";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player/youtube"), {
  ssr: false,
});

function AboutVideoCard() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isVideoStarted, setIsVideoStarted] = useState(true);
  const [isImageVisible, setIsImageVisible] = useState(false);

  useEffect(() => {
    if (isVideoStarted) {
      setIsVideoPlaying(true);
      const timer = setTimeout(() => setIsImageVisible(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [isVideoStarted]);

  const handlePlay = () => {
    setIsVideoPlaying(true);
  };

  const handlePause = () => {
    window.alert("halo")
    setIsVideoPlaying(false);
  };
  const handleEnded = () => {
    setIsVideoPlaying(false);
    setIsVideoStarted(false);
  };
  return (
    <div className="max-w-screen-xl relative mx-auto">
      <div className="w-full aspect-video rounded-xl relative overflow-clip mt-10">
        <div
          className={`w-full h-full transition-opacity absolute inset-0 duration-500 ${
            isVideoStarted ? "" : "opacity-0"
          }`}
        >
          <ReactPlayer
            width={`100%`}
            height={`100%`}
            controls={true}
            url="https://www.youtube.com/watch?v=IlbV1oxvoug"
            playing={isVideoPlaying}
            onEnded={handleEnded}
            onPlay={handlePlay}
            onPause={handlePause}
          />
        </div>
        <img
          src="/assets/about/about1.png"
          alt="placeholder"
          className={`w-full h-full max-sm:h-56 absolute max-md:h-72 rounded-xl transition-opacity duration-1000 object-cover ${
            isVideoStarted
              ? isImageVisible
                ? "opacity-0"
                : "hidden"
              : "opacity-100"
          }`}
        />

        <div
          className={`absolute bottom-0 left-0 w-full p-5 max-md:p-4 max-sm:p-3 backdrop-blur-2xl bg-black bg-opacity-30 transition-transform duration-700 rounded-xl ${
            isVideoPlaying ? "translate-y-full" : ""
          }`}
        >
          <p className="font-medium max-sm:text-sm text-red-400">Youtube</p>
          <p className="text-lg max-sm:text-base text-white font-medium">
            KMA History Video
          </p>
        </div>
        {!isVideoPlaying && (
          <button
            onClick={() => setIsVideoStarted(true)}
            className={`absolute p-4 m-auto text-white inset-0 top-[-10%] size-fit rounded-full bg-[#2A282FCC] backdrop-blur-lg ${
              isVideoStarted ? "hidden" : ""
            }`}
          >
            <FaPlay />
          </button>
        )}
      </div>
    </div>
  );
}

export default AboutVideoCard;
