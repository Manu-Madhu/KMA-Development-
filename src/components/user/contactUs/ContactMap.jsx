import Image from "next/image";
import React from "react";

const ContactMap = () => {
  return (
    <main className="w-full h-full relative flex items-center justify-center rounded-xl">
      <Image
        width={500}
        height={500}
        src={"/map.png"}
        alt="mapImage"
        className="w-full h-full"
      />
      <div className="absolute">
        <div className="relative overflow-hidden rounded-full">
          <button className="buttonAnimation p-2.5 bg-white rounded-full px-5 text-sm font-[500] text-primaryColor">
            <span>Get Direction</span>
          </button>
        </div>
      </div>
    </main>
  );
};

export default ContactMap;
