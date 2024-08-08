import React from 'react'
import { IoClose } from "react-icons/io5";

const SocialConnectModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
  return (
    <div className=" h-[450px] w-[250px]  md:w-[600px] pt-3 px-2 ">
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
    <div className="mb-3">
      <label htmlFor="exampleInputFile" className="block text-md font-medium text-customBlack-700">Platform</label>
     <select>
      <input type="textarea" className="form-input h-20 block w-full rounded-md border pl-3" id="exampleInputFile" />
      </select>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputFile" className="block text-md font-medium text-customBlack-700">Link</label>
      <input type="textarea" className="form-input h-20 block w-full rounded-md border pl-3" id="exampleInputFile" />
    </div>
    <button type="submit" className="mt-4 block w-full h-14 px-4 py-2 bg-customRed text-white rounded-md">Update</button>
  </div>
</form>

      </div>
      </div>
  );
};
export default SocialConnectModal
