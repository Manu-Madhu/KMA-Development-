import React from "react";

const VideoBackground = ({ videoSrc }) => {
  return (
    <div className="relative w-full h-full ">
      <video autoPlay muted loop className=" object-cover w-full h-full">
        <source src={videoSrc} type="video/mp4" />
      </video>
    </div>

    // <div className="video-container">
    //     <video autoPlay muted loop className="background-video">
    //         <source src={videoSrc} type="video/mp4" />
    //         Your browser does not support the video tag.
    //     </video>
    // </div>
  );
};

export default VideoBackground;
