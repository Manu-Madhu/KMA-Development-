import React from "react";
import VideoBackground from "./VideoBackground";

function LandingPart() {
  // const sample = "https://firebasestorage.googleapis.com/v0/b/knotube-55bb5.appspot.com/o/1671624810510file_example_MP4_640_3MG.mp4?alt=media&token=aa154461-6565-4b94-8d25-e259f0f0ebb8"
  const sample = "/assets/home/sample.mp4";

  return (
    <div className="h-screen relative w-full flex flex-col items-center text-white bg-white">
      <VideoBackground videoSrc={sample} />

      <div className="absolute flex flex-col items-center justify-center gap-3 lg:gap-6 top-1/4">
        <h1 className=" text-[4.5rem] max-sm:text-3xl leading-[80px] font-bold z-10 text-center">
          Shaping a sustainable <br /> future
        </h1>

        <p className="lg:text-xl mt-4 text-base font-[200] text-center w-2/3 lg:w-full">
          Honouring Excellence in CSR and ESG Leadership
        </p>

        <button className="p-2 lg:p-3 px-4 lg:px-8 mt-8 border border-gray-600 w-fit rounded-full font-semibold bg-white text-red-600">
          Join Us
        </button>
      </div>
    </div>
  );
}

export default LandingPart;
