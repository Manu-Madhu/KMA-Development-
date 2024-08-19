"use client";

import useAxiosPrivate from "@/hooks/useAxiosPrivate";
import { socialConnectRoute } from "@/utils/Endpoint";
import React, { useState } from "react";
import { toast } from "react-toastify";

const SocialConnectModal = ({ close, getData }) => {
  const [coverImage, setCoverImage] = useState({});
  const [title, setTitle] = useState("");
  const [platform, setPlatform] = useState("Youtube");
  const [link, setLink] = useState("");

  const handleCoverImageChange = (e) => {
    setCoverImage(e.target.files[0]);
  };

  const handletitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handlePlatformChange = (e) => {
    setPlatform(e.target.value);
  };

  const handleLinkChange = (e) => {
    setLink(e.target.value);
  };

  const axiosPrivate = useAxiosPrivate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Cover Image:", coverImage);
    console.log("title:", title);
    console.log("Platform:", platform);
    console.log("Link:", link);

    const formdata = new FormData();

    formdata.append('coverImage', coverImage)
    formdata.append('title', title)
    formdata.append('platform', platform)
    formdata.append('link', link)

    try {
      const response = await axiosPrivate.post(socialConnectRoute, formdata)

      if (response.status === 201) {
        toast.success('Added')
        await getData()
        close()
      }
      else{
        toast.error('Failed to add')
      }

    } catch (error) {
      console.log(error)
      toast.error('Failed to add')

    }

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
            value={coverImage?.name}
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
        <label className="block mb-1">title</label>
        <input
          type="text"
          value={title}
          onChange={handletitleChange}
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
