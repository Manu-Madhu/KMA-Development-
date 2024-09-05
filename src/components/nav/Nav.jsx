"use client";
import { NavData } from "@/data/NavData";
import { IoClose, IoMenu } from "react-icons/io5";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import SubNav from "./SubNav";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import useLogout from "@/hooks/logoutHook/UseLogout";

const Nav = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // State to track the open dropdown
  const [scrolled, setScrolled] = useState(false); // State to track scroll position
  const location = usePathname();
  const { data: session, status } = useSession();
  const [isLoggedIn,setIsLoggenIn] = useState(false)
  const logout = useLogout()

  useEffect(() => {
    if (status === "authenticated") {
      setIsLoggenIn(true);
    } else {
      setIsLoggenIn(false);
    }
  }, [status]);
  
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

  // Function to filter membership options based on login status
  const filterMembershipOptions = (subData) => {
    if (!subData) return [];
    return subData.map(item => {
      if (item.name.toLowerCase() === "logout") {
        return { ...item, onClick: logout }; // Add onClick handler for logout
      }
      return item;
    }).filter(item => 
      isLoggedIn ? ['Profile', 'logout'].includes(item.name) : ['Registration', 'Login'].includes(item.name)
    );
  };

  return (
    <div
        className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
         scrolled
              ? "bg-white shadow-md text-black"
             : location === "/"
               ? "bg-transparent text-white"
              : "bg-transparent text-black"
          }`}
        >
      {/* Window View */}
      <div className="max-w-screen-xl mx-auto w-full hidden lg:flex items-center justify-between h-[80px] p-3">
        {/* Update */}
        <Link href='/'>
        {scrolled ? (
          
          <Image
            src={"/logo.png"}
            alt="logo"
            className=""
            width={150}
            height={50}
          />
        ) : (
          <Image
            src={"/logo1.png"}
            alt="logo"
            className=""
            width={150}
            height={50}
          />
        )}
        </Link>
        <ul className="flex gap-5">
        {NavData.map((item) => (
            <div key={item?._id} className="flex items-center">
              {item?.subData?.length > 0 ? (
                <SubNav
                  data={{
                    ...item,
                    subData: item.name === "Membership" 
                      ? filterMembershipOptions(item.subData)
                      : item.subData
                  }}
                  isOpen={openDropdown === item?._id}
                  handleToggle={() => handleToggle(item?._id)}
                  closeNav={setMobileMenu}
                />
              ) : (
                <li className="cursor-pointer">
                  <Link href={item?.Path}>{item?.name}</Link>
                </li>
              )}
            </div>
          ))}
        </ul>
        <div className="relative overflow-hidden rounded-full ">
          <Link href={"/contact-us"}>
            <button
              className={`buttonAnimation overflow-hidden border rounded-full text-sm p-2 px-5  ${
                scrolled
                  ? "text-primaryColor"
                  : location !== "/"
                  ? "text-primaryColor"
                  : "text-white "
              } `}
            >
              <span>Contact Us</span>
            </button>
          </Link>
        </div>
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

          <div className="flex flex-col w-full h-full">
            <div className="w-full h-full flex flex-col  items-start justify-start px-10 mt-12">
              <Image
                src={"/logo.png"}
                alt="logo"
                className="w-60"
                width={240}
                height={50}
              />
              <div className="mt-5 w-full flex items-center justify-center">
                <ul className="flex flex-col items-center justify-center gap-2 text-black w-full">
                  {NavData.map((item) => (
                    <div key={item?._id} className="flex items-start w-full ">
                      {item?.subData?.length > 0 ? (
                        <SubNav
                          data={item}
                          isOpen={openDropdown === item?._id} // Pass down if the dropdown is open
                          handleToggle={() => handleToggle(item?._id)} // Handle toggle
                          closeNav={setMobileMenu}
                        />
                      ) : (
                        <li className="cursor-pointer border w-full p-2 rounded">
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
// "use client";
// import { NavData } from "@/data/NavData";
// import { IoClose, IoMenu, IoChevronDown } from "react-icons/io5";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import SubNav from "./SubNav";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// const Nav = () => {
//   const [mobileMenu, setMobileMenu] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const location = usePathname();

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 0);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   // Determine text color based on the location and scroll state
//   const textColor =
//     location === "/" && !scrolled ? "text-white" : "text-black";

//   return (
//     <div
//       className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
//         scrolled
//           ? "bg-white shadow-md"
//           : location === "/"
//           ? "bg-transparent"
//           : "bg-white"
//       }`}
//     >
//       {/* Desktop View */}
//       <div className="max-w-screen-xl mx-auto w-full hidden lg:flex items-center justify-between h-[80px] p-3">
//         <Link href="/">
//           {scrolled ? (
//             <Image
//               src={"/logo.png"}
//               alt="logo"
//               width={150}
//               height={50}
//             />
//           ) : (
//             <Image
//               src={"/logo1.png"}
//               alt="logo"
//               width={150}
//               height={50}
//             />
//           )}
//         </Link>

//         <ul className={`flex gap-5 ${textColor}`}>
//           {NavData.map((item) => (
//             <li key={item?._id} className="relative group">
//               <Link href={item?.Path} className={`flex items-center ${textColor}`}>
//                 {item?.name}
//                 {item?.subData?.length > 0 && <IoChevronDown className="ml-2" />}
//               </Link>

//               {item?.subData?.length > 0 && (
//                 <div className="absolute top-full left-0 mt-2 bg-white border border-primaryColor rounded-3xl shadow-lg z-50 opacity-0 group-hover:opacity-100 group-hover:block transition-all duration-300 w-48">
//                   <ul className="flex  flex-col">
//                     {item.subData.map((subItem) => (
//                       <li key={subItem?._id} className="p-2 hover:bg-primaryColor rounded-2xl hover:text-white">
//                         <Link href={subItem?.Path} className="text-black hover:text-white">
//                           {subItem?.name}
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               )}
//             </li>
//           ))}
//         </ul>

//         <Link href="/contact-us">
//           <button
//             className={`buttonAnimation overflow-hidden border rounded-full text-sm p-2 px-5 ${
//               scrolled || location !== "/"
//                 ? "text-primaryColor"
//                 : "text-white"
//             }`}
//           >
//             Contact Us
//           </button>
//         </Link>
//       </div>

//       {/* Mobile View */}
//       <div className="max-w-screen-xl mx-auto w-full flex lg:hidden items-center justify-between h-[80px] p-3">
//         <Image src="/logo.png" alt="logo" width={150} height={100} />
//         <IoMenu size={30} onClick={() => setMobileMenu(!mobileMenu)} />
//       </div>

//       {mobileMenu && (
//         <div className="w-screen h-screen fixed top-0 left-0 bg-white z-50">
//           <IoClose
//             className="absolute top-2 right-2 rounded-full border border-black text-black"
//             size={30}
//             onClick={() => setMobileMenu(!mobileMenu)}
//           />
//           <div className="flex flex-col w-full h-full px-10 mt-12">
//             <Image src="/logo.png" alt="logo" width={240} height={50} />
//             <ul className="flex flex-col items-center justify-center gap-2 text-black w-full mt-5">
//               {NavData.map((item) => (
//                 <li key={item?._id} className="w-full">
//                   <Link
//                     href={item?.Path}
//                     onClick={() => setMobileMenu(false)}
//                     className="border w-full p-2 rounded"
//                   >
//                     {item?.name}
//                   </Link>
//                   {item?.subData?.length > 0 && (
//                     <SubNav
//                       data={item?.subData}
//                       closeNav={() => setMobileMenu(false)}
//                     />
//                   )}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Nav;








