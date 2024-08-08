"use client"
import React,{useState} from 'react'
import { IoClose } from "react-icons/io5";
import { MdLink } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import '../common/Style.css';


const SocialConnectModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    
  return (
    <div className=" h-[480px] w-[250px]  md:w-[600px] pt-3 px-2 ">
     <div>
     <h1 className="text-lg mb-5 text-secondary">Add social connect</h1>
      <IoClose
        onClick={onClose}
        size={23}
        className="absolute top-2 right-2 text-[#475467] cursor-pointer"
      />
    <form>
  <div>
    <div className="mb-3">
      <label htmlFor="exampleInputTitle" className="block text-md font-medium pb-0 text-customBlack-700">Cover image</label>
      <input type="text" className="form-input block w-full h-10 rounded-md border pl-3" placeholder="reogeorge-2003.png " id="exampleInputTitle" aria-describedby="titleHelp" />
      <button type="button" className="mt-2 px-4 py-2 rounded-md shadow-lg">browse</button>
      <button type="button" className="mt-2 ml-2 px-4 py-2 shadow-lg rounded-md">view</button>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputcoverimage" className="block text-md font-medium text-customBlack-700">Event name</label>
      <input type="text" className="form-input block w-full h-10 rounded-md border pl-3" placeholder="Book Review" id="exampleInputcoverimage" />
      
    </div>

        <div className="relative w-full">
      <label htmlFor="menu-button" className="block text-md font-medium text-customBlack-700 mb-1">
        Platform
      </label>
      <div className="relative border rounded-md h-10 flex items-center">
        <select
          name="platform"
          id="menu-button" 
          className="appearance-none w-full h-full pl-3 pr-8 bg-white text-gray-900 border-none 
          rounded-md focus:outline-none placeholder-option"
        >
          <option value="option1" className="text-md text-gray icon-option youtube">
          <FaYoutube className="mr-2" /> YouTube
          </option>
          <option value="option2" className="text-sm">
            Option 1
          </option>
          <option value="option3" className="text-sm">
            Option 2
          </option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
        <FaYoutube />
        </div>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
    <div className="mb-3 relative">
      <label htmlFor="exampleInputFile" className="block text-md font-medium text-customBlack-700">
        Link
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <MdLink  className="text-gray-400 size-6" />
        </div>
        <input
          type="text"
          className="form-input h-10 block w-full pl-10 rounded-md border"
          placeholder="  https://www.youtube.com/watch?v=dQw4w9WgXcQ" // Add space before URL
          id="exampleInputFile"
          style={{ paddingLeft: '2.5rem' }} // Adjust padding to accommodate icon
        />
      </div>
    </div>
    <button type="submit" className="mt-4 block w-full h-14 mb-4 pb-4 px-4 py-2 bg-customRed text-white rounded-md">Upload</button>
  </div>
</form>

      </div>
      </div>
  );
};
export default SocialConnectModal
