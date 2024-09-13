"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import "react-toastify/dist/ReactToastify.css";
import { contactusRoute } from "@/utils/Endpoint";
import axios from "@/axios-folder/axios";
import { toast } from "react-toastify";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNo: "",
    message: "",
  });

  // State for handling fetched data
  const [fetchedData, setFetchedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData);
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phoneNo ||
      !formData.message
    ) {
      toast.error("All fields are required.");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(
        contactusRoute,
        {
          firstname: formData.firstName,
          lastname: formData.lastName,
          email: formData.email,
          phoneNo: formData.phoneNo,
          message: formData.message,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response)

      if (response.status === 201) {
        toast.success("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNo: "",
          message: "",
        });
      }
    } catch (error) {
      console.log(error)
      console.error("Error sending message:", error.response || error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>

      <h1 className="text-[#475467] text-[15px]">
        Our friendly team would love to hear from you.
      </h1>

      <form
        onSubmit={handleSubmit}
        className="mt-5 lg:mt-10 flex flex-col gap-5"
      >
        <div className="flex gap-3 w-full">
          <div className="w-full">
            <label htmlFor="firstName" className="text-[#344054] font-medium">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="p-2 text-sm w-full border rounded-lg border-[#D0D5DD] placeholder:text-[#667085] ps-4"
              placeholder="First name"
            />
          </div>
          <div className="w-full">
            <label htmlFor="lastName" className="text-[#344054] font-medium">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="p-2 text-sm w-full border rounded-lg border-[#D0D5DD] placeholder:text-[#667085] ps-4"
              placeholder="Last name"
            />
          </div>
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="email" className="text-[#344054] font-medium">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="p-2 text-sm w-full border rounded-lg border-[#D0D5DD] placeholder:text-[#667085] ps-4"
            placeholder="you@company.com"
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="phoneNo" className="text-[#344054] font-medium">
            Phone number
          </label>
          <input
            type="text"
            name="phoneNo"
            value={formData.phoneNo}
            onChange={handleChange}
            className="p-2 text-sm w-full border rounded-lg border-[#D0D5DD] placeholder:text-[#667085] ps-4"
            placeholder="+91 (555) 000-0000"
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="message" className="text-[#344054] font-medium">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="p-2 text-sm w-full h-40 border rounded-lg border-[#D0D5DD] placeholder:text-[#667085] ps-4"
            placeholder="Your message"
          />
        </div>

        {/* <div className="flex w-full gap-3">
          <input
            type="checkbox"
            className="p-2 text-sm border rounded-lg border-[#D0D5DD] placeholder:text-[#475467] ps-4"
          />
          <label htmlFor="" className="text-[#344054] text-sm">
            You agree to our friendly <Link href={`#`} className="underline">privacy policy</Link>.
          </label>
        </div> */}
        <div className="flex flex-col w-full">
          <button
            type="submit"
            className="bg-primaryColor text-white p-3 text-sm rounded-lg"
          >
            {loading ? "Submitting .... " : "Send message "}
          </button>
        </div>
      </form>

      {/* Display fetched data if available */}
      {fetchedData && (
        <div className="mt-5">
          <h2 className="text-[#475467] text-[15px]">Fetched Data:</h2>
          <pre className="bg-[#F9FAFB] p-3 rounded-lg">
            {JSON.stringify(fetchedData, null, 2)}
          </pre>
        </div>
      )}
    </main>
  );
};

export default ContactForm;
