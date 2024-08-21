"use client";
import { NavData } from "@/data/NavData";
import { IoClose, IoMenu } from "react-icons/io5";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import SubNav from "./SubNav";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // State to track the open dropdown
  const [scrolled, setScrolled] = useState(false); // State to track scroll position
  const location = usePathname();
  const handleToggle = (id) => {
    setOpenDropdown((prev) => (prev === id ? null : id));
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        scrolled
          ? "bg-white shadow-md text-black"
          : location == "/"
          ? "bg-transparent text-white"
          : "bg-transparent text-black"
      }`}
    >
      {/* Window View */}
      <div
        className={`max-w-screen-xl mx-auto w-full hidden lg:flex items-center justify-between h-[80px] p-3`}
      >
        <Image
          src={"/logo.png"}
          alt="logo"
          className=""
          width={150}
          height={50}
        />
        <ul className="flex gap-5">
          {NavData.map((item) => (
            <div key={item?._id} className="flex items-center">
              {item?.subData?.length > 0 ? (
                <SubNav
                  data={item}
                  isOpen={openDropdown === item?._id} // Pass down if the dropdown is open
                  handleToggle={() => handleToggle(item?._id)} // Handle toggle
                />
              ) : (
                <li className="cursor-pointer">
                  <Link href={item?.Path}>{item?.name}</Link>
                </li>
              )}
            </div>
          ))}
        </ul>
        <button
          className={`border rounded-2xl text-sm p-2 px-5  ${
            scrolled
              ? "text-primaryColor"
              : location !== "/"
              ? "text-primaryColor"
              : "text-white "
          } `}
        >
          Contact Us
        </button>
      </div>

      {/* Mobile View */}
      <div className="max-w-screen-xl mx-auto w-full flex lg:hidden items-center justify-between h-[80px] p-3">
        <Image
          src={"/logo.png"}
          alt="logo"
          className=""
          width={150}
          height={100}
        />
        <div>
          <IoMenu
            className=""
            size={30}
            onClick={() => setMobileMenu(!mobileMenu)}
          />
        </div>
      </div>

      {mobileMenu && (
        <div className="w-screen h-screen fixed top-0 left-0 bg-white z-50">
          <div>
            <IoClose
              className="absolute top-2 right-2 rounded-full border border-black text-black"
              size={30}
              onClick={() => setMobileMenu(!mobileMenu)}
            />
          </div>

          <div className="flex flex-col items-center justify-center w-full h-full">
            <div className="w-full flex flex-col  items-center justify-center">
              <Image
                src={"/logo.png"}
                alt="logo"
                className=""
                width={240}
                height={50}
              />
              <div className="mt-10">
                <ul className="flex flex-col items-center gap-5 text-black w-full">
                  {NavData.map((item) => (
                    <div key={item?._id} className="flex items-center w-full">
                      {item?.subData?.length > 0 ? (
                        <SubNav
                          data={item}
                          isOpen={openDropdown === item?._id} // Pass down if the dropdown is open
                          handleToggle={() => handleToggle(item?._id)} // Handle toggle
                          closeNav={setMobileMenu}
                        />
                      ) : (
                        <li className="cursor-pointer flex items-center w-full justify-center">
                          <Link
                            onClick={() => setMobileMenu(!mobileMenu)}
                            href={item?.Path}
                          >
                            {item?.name}
                          </Link>
                        </li>
                      )}
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
