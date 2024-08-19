"use client";

import axios from "@/axios-folder/axios";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";
import { platformRoute, socialConnectRoute } from "@/utils/Endpoint";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const SocialConnectModal = ({ mode,id, close, getData }) => {
  const [coverImage, setCoverImage] = useState({});

  // const [singleData ,setSingleData] = useState({})

  const [platforms, setPlatforms] = useState([]);

  const getAllPlatforms = async()=>{
    try {
      const response = await axios.get(platformRoute)

      if(response.status === 200){
        setPlatforms(response.data.platforms)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const [obj, setObj] = useState({
    title: '',
    platform: '',
    link: '',
  })

  const handleChange = (e) => {
    setObj((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleCoverImageChange = (e) => {
    setCoverImage(e.target.files[0]);
  };

  const axiosPrivate = useAxiosPrivate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formdata = new FormData();

    formdata.append('coverImage', coverImage)
    formdata.append('title', obj.title)
    formdata.append('platform', obj.platform)
    formdata.append('link', obj.link)

    try {
      let response;
      if (mode === "create") {
        response = await axiosPrivate.post(socialConnectRoute, formdata)

      }
      else if (mode === "update") {
        response = await axiosPrivate.put(`${socialConnectRoute}/${id}`, formdata)

      }

      if (response.status === 201) {
        toast.success('Added')
        await getData()
        close()
      }
      if (response.status === 200) {
        toast.success('Updated')
        await getData()
        close()
      }
      else {
        toast.error('Attempt failed')
      }

    } catch (error) {
      console.log(error)
      toast.error('Attempt failed')

    }

  };

  const getSingleData = async()=>{
    try {
      const response = await axios.get(`${socialConnectRoute}/${id}`)

      if(response.status === 200){
        setObj((prev)=>({
          ...prev,
          ...response.data
        }))
      }
      
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getAllPlatforms()
    if(mode === "update" && id){
      getSingleData()
    }
  },[])

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

      <h2 className="text-lg font-bold mb-4 capitalize">{mode} social connect</h2>
      <div className="mb-4">
        <label className="block mb-1">Cover image</label>
        <div className="mb-2">
          <input
            type="text"
            value={coverImage?.name || obj?.coverImagefileName}
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
          value={obj.title}
          name="title"
          onChange={handleChange}
          className="border p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Platform</label>
        <select
          value={obj.platform}
          name="platform"
          onChange={handleChange}
          className="border p-2 w-full"
        >
          {
            platforms?.map((item,index)=>(
              <option key={index} value={item?._id}>{item.name}</option>
              
            ))
          }
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-1">Link</label>
        <input
          type="text"
          value={obj.link}
          name="link"
          onChange={handleChange}
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
