"use client"
import React from "react";
import UnderlinedHeading from "@/components/user/Common/UnderlinedHeading";
import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { FaGlobeAsia } from "react-icons/fa";
import { IoCloudUploadOutline } from "react-icons/io5";
import Link from "next/link";
import useregistrationValidation from "@/hooks/registrationHooks.js/useregistrationValidation";
import validateForm from "@/hooks/registrationHooks.js/validateRegistration";

const Page = () => {
  const initialState={
    username: "",
    password: "",
    name: "",
    email: "",
    telephone: "",
    country: "",
  }
  const {
    formData,
    errors,
    handleChange,
    handleSubmit,
  }=useregistrationValidation(initialState,validateForm)

  //handle form submission
  const submitForm=()=>{
    console.log("Form submitted Successfully",formData);
  }

  return (
    <div className="max-w-screen-xl p-3 py-14 pb-20 lg:mt-20 mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Side: Text Content */}
        <div className="lg:mr-20">
          <div className="lg:mr-5">
            <UnderlinedHeading heading="The Member" text="Registration Process:" />
          </div>
          <div className="lg:text-left text-center">
            {/* <h1 className="text-[2.5rem] max-md:text-3xl font-bold leading-[3.5rem]">
              Process:
            </h1> */}
            <ol className="list-decimal pl-4 mt-4 space-y-5  text-gray-800 lg:text-left text-start">
              <li>
                Understand Member benefits, Membership Options, and Fee Details.{" "}
                <Link href="/member" className="text-red-600 underline">
                  Read more
                </Link>
              </li>
              <li>Select unique username and password</li>
              <li>Complete Membership Application Online</li>
              <li>Remit Membership Fee</li>
            </ol>
            <p className="mt-2 lg:mt-4 text-gray-800 lg:text-left text-start">
              Please choose from 3 payment options for settling the membership
              fee online:
            </p>
            <p className="mt-2 lg:mt-4 text-gray-800 font-medium lg:text-left text-start">
              1. Online Payment (Credit/Debit Card) 2. Bank Transfer 3. Demand
              Draft/Cheque
            </p>
          </div>
        </div>
        {/* Right Side: Form in a Card */}
        <div className="bg-white shadow-md border w-full rounded-lg mx-auto p-6 max-w-md sm:max-w-lg lg:max-w-full lg:ml-10">
          <form className="grid grid-cols-1 gap-4" onSubmit={(e) => handleSubmit(e, submitForm)}>
            <div className="flex flex-col lg:flex-row lg:items-start space-y-2 lg:space-y-0 lg:space-x-5 border-b border-gray-200 pb-4">
              <label className="w-full lg:w-1/3 text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                className="w-full lg:w-2/3 mt-1 block px-3 py-2 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              />
              {errors.username && (
                <p className="text-red-500 text-sm">{errors.username}</p>
              )}
            </div>
            <div className="flex flex-col lg:flex-row lg:items-start space-y-2 lg:space-y-0 lg:space-x-5 border-b border-gray-200 pb-4">
              <label className="w-full lg:w-1/3 text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="Password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full lg:w-2/3 mt-1 block px-3 py-2 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
            </div>
            <div className="flex flex-col lg:flex-row lg:items-start space-y-2 lg:space-y-0 lg:space-x-5 border-b border-gray-200 pb-4">
              <label className="w-full lg:w-1/3 text-sm font-medium text-gray-700">
                Name of the Applicant
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name of the Applicant"
                value={formData.name}
                onChange={handleChange}
                className="w-full lg:w-2/3 mt-1 block px-3 py-2 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>
            <div className="flex flex-col lg:flex-row lg:items-start space-y-2 lg:space-y-0 lg:space-x-5 border-b border-gray-200 pb-4">
              <label className="w-full lg:w-1/3 text-sm font-medium text-gray-700">
                Address
              </label>
              <textarea
                name="address"
                placeholder="Enter your address here"
                rows="5"
                className="w-full lg:w-2/3 mt-1 block px-3 py-2 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              ></textarea>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-start space-y-2 lg:space-y-0 lg:space-x-5 border-b border-gray-200 pb-4">
              <label className="w-full lg:w-1/3 text-sm font-medium text-gray-700">
                State/Province
              </label>
              <input
                type="text"
                placeholder="State/Province"
                className="w-full lg:w-2/3 mt-1 block px-3 py-2 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              />
            </div>
            <div className="flex flex-col lg:flex-row lg:items-start space-y-2 lg:space-y-0 lg:space-x-5 border-b border-gray-200 pb-4">
              <label className="w-full lg:w-1/3 text-sm font-medium text-gray-700">
                Fax
              </label>
              <input
                type="text"
                placeholder="Fax"
                className="w-full lg:w-2/3 mt-1 block px-3 py-2 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              />
            </div>
            <div className="flex flex-col lg:flex-row lg:items-start space-y-2 lg:space-y-0 lg:space-x-5 border-b border-gray-200 pb-4">
              <label className="w-full lg:w-1/3 text-sm font-medium text-gray-700">
                Country
              </label>
              <div className="relative w-full lg:w-2/3 mt-1">
                <select className="block w-full px-8 py-2 border border-gray-200 rounded-md shadow-sm appearance-none pr-8 focus:outline-none
                 focus:ring-red-500 focus:border-red-500 sm:text-sm"
                 value={formData.country}
                onChange={handleChange}>
                  <option>United States</option>
                  <option>India</option>
                  {/* Add other countries as needed */}
                </select>
                <div className="absolute inset-y-0 left-0 flex items-center px-2 pointer-events-none">
                  <FaGlobeAsia className="text-gray-400" />
                </div>
              </div>
              {errors.country && (
                <p className="text-red-500 text-sm">{errors.country}</p>
              )}
            </div>
            <div className="flex flex-col lg:flex-row lg:items-start space-y-2 lg:space-y-0 lg:space-x-5 border-b border-gray-200 pb-4">
              <label className="w-full lg:w-1/3 text-sm font-medium text-gray-700">
                Telephone
              </label>
              <input
                type="text"
                placeholder="Telephone"
                value={formData.telephone}
                onChange={handleChange}
                className="w-full lg:w-2/3 mt-1 block px-3 py-2 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              />
              {errors.telephone && (
                <p className="text-red-500 text-sm">{errors.telephone}</p>
              )}
            </div>
            <div className="flex flex-col lg:flex-row lg:items-start space-y-2 lg:space-y-0 lg:space-x-5 border-b border-gray-200 pb-4">
              <label className="w-full lg:w-1/3 text-sm font-medium text-gray-700">
                Email Address
              </label>
              <div className="w-full lg:w-2/3 flex items-center mt-1 border border-gray-200 rounded-md shadow-sm focus-within:ring-red-500 focus-within:border-red-500">
                <span className="px-2 text-gray-500">
                  <MdEmail />
                </span>
                <input
                  type="email"
                  placeholder="@gmail.com"
                  value={formData.email}
                onChange={handleChange}
                  className="w-full px-3 py-2 focus:outline-none sm:text-sm"
                />
                {errors.telephone && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
              </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-start space-y-2 lg:space-y-0 lg:space-x-5 border-b border-gray-200 pb-4">
              <label className="w-full lg:w-1/3 text-sm font-medium text-gray-700">
                Contact Person
              </label>
              <input
                type="text"
                placeholder="Contact Person"
                className="w-full lg:w-2/3 mt-1 block px-3 py-2 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              />
            </div>
            <div className="flex flex-col lg:flex-row lg:items-start space-y-2 lg:space-y-0 lg:space-x-5 border-b border-gray-200 pb-4">
              <label className="w-full sm:w-1/3 text-sm font-medium text-gray-700">
                Nature of business/poduct line:
              </label>
              <input
                type="text"
                placeholder="Nature of business/poduct line:"
                className="w-full lg:w-2/3 mt-1 block px-3 py-2 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              />
            </div>
            <div className="flex flex-col lg:flex-row lg:items-start space-y-2 lg:space-y-0 lg:space-x-5 border-b border-gray-200 pb-4">
              <label className="w-full sm:w-1/3 text-sm font-medium text-gray-700">
                Membership applied for
              </label>
              <select className="w-full lg:w-2/3 mt-1 block px-3 py-2 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm">
                <option>Membership applied for</option>
                {/* Add other countries as needed */}
              </select>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-start space-y-2 lg:space-y-0 lg:space-x-5 border-b border-gray-200 pb-4">
              <label className="w-full sm:w-1/3 text-sm font-medium text-gray-700">
                Name of the bussiness/entity associated with
              </label>
              <input
                type="text"
                placeholder="bussiness"
                className="w-full lg:w-2/3 mt-1 block px-3 py-2 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              />
            </div>
            <div className="flex flex-col lg:flex-row lg:items-start space-y-2 lg:space-y-0 lg:space-x-5 border-b border-gray-200 pb-4">
              <label className="w-full sm:w-1/3 text-sm font-medium text-gray-700">
                Address of the business/entity
              </label>
              <textarea
                name="address"
                placeholder="Enter your address here"
                rows="5"
                className="w-full lg:w-2/3 mt-1 block px-3 py-2 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              ></textarea>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-start space-y-2 lg:space-y-0 lg:space-x-5 border-b border-gray-200 pb-4">
              <label className="w-full sm:w-1/3 text-sm font-medium text-gray-700">
                Registration number of business/entity
              </label>
              <input
                type="text"
                placeholder="Registration number of business/entity"
                className="w-full lg:w-2/3 mt-1 block px-3 py-2 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              />
            </div>
            <div className="flex flex-col lg:flex-row lg:items-start space-y-2 lg:space-y-0 lg:space-x-5 border-b border-gray-200 pb-4">
              <label className="w-full sm:w-1/3 text-sm font-medium text-gray-700">
                Registration date of business/entity
              </label>
              <input
                type="text"
                placeholder="10/12/2023"
                className="w-full lg:w-2/3 mt-1 block px-3 py-2 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              />
            </div>
            <div className="flex flex-col lg:flex-row lg:items-start space-y-2 lg:space-y-0 lg:space-x-5 border-b border-gray-200 pb-4">
              <label className="w-full sm:w-1/3 text-sm font-medium text-gray-700">
                Date of commencement of business/entity
              </label>
              <input
                type="text"
                placeholder="10/12/2023"
                className="w-full lg:w-2/3 mt-1 block px-3 py-2 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              />
            </div>

            {/* Form Field - Organization's website */}
            <div className="flex flex-col lg:flex-row lg:items-start space-y-2 lg:space-y-0 lg:space-x-5 border-b border-gray-200 pb-4">
              <label className="w-full sm:w-1/3 text-sm font-medium text-gray-700">
                Name of the authorized person representing business/entity
              </label>
              <input
                type="text"
                placeholder="name"
                className="w-full lg:w-2/3 mt-1 block px-3 py-2 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              />
            </div>
            <div className="flex flex-col lg:flex-row lg:items-start space-y-2 lg:space-y-0 lg:space-x-5 border-b border-gray-200 pb-4">
              <label className="w-full sm:w-1/3 text-sm font-medium text-gray-700">
                Name of person authorized to attend meetings
              </label>
              <textarea
                name="address"
                placeholder="name"
                rows="5"
                className="w-full lg:w-2/3 mt-1 block px-3 py-2 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              ></textarea>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-start space-y-2 lg:space-y-0 lg:space-x-5 border-b border-gray-200 pb-4">
              <label className="w-full lg:w-1/3 text-sm font-medium text-gray-700">
                Attach identity proof
              </label>
              <div className="w-full lg:w-2/3 mt-1 block px-3 py-3 border-2 border-dashed border-gray-300 rounded-md shadow-sm text-center cursor-pointer">
                <input type="file" className="hidden" id="file-upload" />
                <label htmlFor="file-upload" className="cursor-pointer">
                  <div className="flex flex-col items-center">
                    <IoCloudUploadOutline className="w-12 h-12" />
                    <div className="flex space-x-1">
                      <p className="text-red-600">Click to upload</p>
                      <p className="text-gray-500">or drag and drop</p>
                    </div>
                    <p className="text-gray-500 text-xs">
                      PDF, PNG, JPG, or GIF (max. 5MB)
                    </p>
                  </div>
                </label>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start space-y-2 sm:space-y-0 sm:space-x-5 border-b border-gray-200 pb-4">
              <label className="w-full sm:w-1/3 text-sm font-medium text-gray-700">
                Including Renewal Payment
              </label>
              <div className="w-full sm:w-auto">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-red-500 rounded border-gray-300 focus:ring-red-500"
                />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-start space-y-2 lg:space-y-0 lg:space-x-5 border-b border-gray-200 pb-4">
              <label className="w-full sm:w-1/3 text-sm font-medium text-gray-700">
                Mode of Payment
              </label>
              <select className="w-full lg:w-2/3 mt-1 block px-3 py-2 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm">
                <option>Select payment mode</option>
                {/* Add other options as needed */}
              </select>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-start space-y-2 lg:space-y-0 lg:space-x-5">
              <label className="w-full lg:w-1/3 text-sm font-medium text-gray-700">
                Enter Code
              </label>
              <div className="w-full lg:w-2/3 flex items-center space-x-5">
                <Image
                  src={"/assets/Register/code.png"}
                  alt="code example"
                  width={150}
                  height={40}
                  className="w-20 h-10"
                />
                <input
                  type="text"
                  placeholder="Enter Code"
                  className="w-full mt-1 block px-3 py-2 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="py-3 mt-2 px-4 border border-transparent rounded-full shadow-sm text-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Register for Membership
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
