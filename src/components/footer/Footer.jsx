import React from "react";
import IconCard from "./IconCard";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row max-w-screen-xl mx-auto ">
        <div className="flex flex-col items-start justify-between">
          <div className="top">
            <Image
              src={"/logo.png"}
              alt="logo"
              className=""
              width={140}
              height={50}
            />
          </div>
          <div className="bottom">
            <p>
              Management House, Kerala Management Avenue,Panampilly Nagar PO,
              Kochi - 682036
            </p>
          </div>
        </div>
        <div>
          <div className="top">
            
          </div>
          <div className="bottom">
            <IconCard />
          </div>
        </div>
      </div>
      <div className="bg-primaryColor">
        <div>
          <div>
            <div>
              <h1>
                If you didn’t find what you are looking for or have questions?
              </h1>
            </div>
            <div>
              <h5>Just send us your contact email and we will contact you.</h5>
              <input type="text" />
            </div>
          </div>
          <div>
            <h1>© 2023 — Copyright</h1>
            <h1>Privacy</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
