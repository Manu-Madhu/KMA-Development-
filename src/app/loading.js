'use client'
import React from "react";
import { Puff } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="bg-black/60 fixed top-0 left-0 w-screen h-screen z-50">
      <div className="w-full h-full flex items-center justify-center">
        <Puff
          visible={true}
          height="80"
          width="80"
          color="white"
          ariaLabel="puff-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    </div>
  );
};

export default Loading;
