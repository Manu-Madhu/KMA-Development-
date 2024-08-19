"use client";

import React, { useState } from "react";

const SocialConnectModal = ({ close }) => {
  const [coverImage, setCoverImage] = useState("");
  const [eventName, setEventName] = useState("");
  const [platform, setPlatform] = useState("Youtube");
  const [link, setLink] = useState("");

  const handleCoverImageChange = (e) => {
    setCoverImage(e.target.files[0]?.name || "");
  };

  const handleEventNameChange = (e) => {
    setEventName(e.target.value);
  };

  const handlePlatformChange = (e) => {
    setPlatform(e.target.value);
  };

  const handleLinkChange = (e) => {
    setLink(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Cover Image:", coverImage);
    console.log("Event Name:", eventName);
    console.log("Platform:", platform);
    console.log("Link:", link);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        width: "800px",
        padding: "36px 48px",
        borderRadius: "20px 0px 0px 0px",
      }}
      className="bg-white mx-auto shadow-lg"
    >
      <button
          onClick={close}
          className="absolute top-3 right-6 text-gray-500 hover:text-gray-700"
        >
          <span className="text-2xl">&times;</span> {/* Cross icon */}
        </button>

      <h2 className="text-lg font-bold mb-4">Add social connect</h2>
      <div className="mb-4">
        <label className="block mb-1">Cover image</label>
        <div className="mb-2">
          <input
            type="text"
            value={coverImage}
            readOnly
            className="border p-2 w-full"
          />
        </div>
        <div className="flex">
          <input
            type="file"
            onChange={handleCoverImageChange}
            className="hidden"
            id="coverImageUpload"
          />
          <label
            htmlFor="coverImageUpload"
            className="border p-2 cursor-pointer w-full text-center"
          >
            Browse
          </label>
          <button type="button" className="border p-2 ml-2 w-full text-center">
            View
          </button>
        </div>
      </div>
      <div className="mb-4">
        <label className="block mb-1">Event name</label>
        <input
          type="text"
          value={eventName}
          onChange={handleEventNameChange}
          className="border p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Platform</label>
        <select
          value={platform}
          onChange={handlePlatformChange}
          className="border p-2 w-full"
        >
          <option value="Youtube">Youtube</option>
          <option value="Facebook">Facebook</option>
          <option value="Twitter">Twitter</option>
          <option value="Instagram">Instagram</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-1">Link</label>
        <input
          type="text"
          value={link}
          onChange={handleLinkChange}
          className="border p-2 w-full"
        />
      </div>
      <button type="submit" className="bg-red-500 text-white p-2 w-full">
        Upload
      </button>
    </form>
  );
};

export default SocialConnectModal;
