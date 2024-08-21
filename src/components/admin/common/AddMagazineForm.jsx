import axios from '@/axios-folder/axios';
import useAxiosPrivate from '@/hooks/useAxiosPrivate';
import { elibraryRoute } from '@/utils/Endpoint';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const AddMagazineForm = ({ close, heading, tab , mode, id, getData}) => {
  const [title, setTitle] = useState('');
  const [coverImage, setCoverImage] = useState({});
  const [file, setFile] = useState({});

  const [singleData, setSingleData] = useState({})

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleCoverImageChange = (e) => {
    setCoverImage(e.target.files[0]);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const axiosPrivate = useAxiosPrivate()
  const route = tab === 'e-library' ? elibraryRoute : ''

  const getSingleData = async()=>{
    try {
      const response = await axios.get(`${route}/${id}`)

      if(response?.status === 200){
          const fetchedData = response?.data
          setSingleData(fetchedData)
          setTitle(fetchedData?.title)
          setCoverImage(fetchedData?.coverImage)
          setFile(fetchedData?.file)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Title:', title);
    console.log('Cover Image:', coverImage);
    console.log('File:', file);

    const formdata = new FormData()
    formdata.append('title', title)
    formdata.append('coverImage', coverImage)
    formdata.append('file', file)

    try {
      let response;
  
      if(mode === 'create'){
        response = await axiosPrivate.post(route, formdata)
      }
      else if(mode === 'update'){
        response = await axiosPrivate.put(`${route}/${id}`, formdata)
      }
  
      if(response?.status === 201){
        toast.success('Created')
        getData()
        close()
      }
      if(response?.status === 200){
        toast.success('Updated')
        getData()
        close()
      }
      
    } catch (error) {
      console.log(error)
      toast.error('Attempt failed')
    }


  };

  useEffect(()=>{
    if(mode === 'update' && id){
      getSingleData()
    }
  },[id])

  return (
    <div
      className="bg-white rounded-lg shadow-lg"
      style={{
        width: '500px', // Adjusted width
        padding: '20px', // Adjusted padding
        borderRadius: '15px', // Adjusted border radius
        boxSizing: 'border-box',
      }}
    >
      <button
          onClick={close}
          className="absolute top-4 right-6 text-gray-500 hover:text-gray-700"
        >
          <span className="text-2xl">&times;</span> {/* Cross icon */}
        </button>
        
      <form onSubmit={handleSubmit} className="flex flex-col h-full">
        <div className="mb-4">
          <h2
            className="text-lg font-bold mb-3"
            style={{
              fontFamily: 'SF Pro Display',
              fontSize: '20px', 
              fontWeight: '400',
              lineHeight: '26px', 
              textAlign: 'left',
              color: 'rgba(71, 84, 103, 1)',
            }}
          >
            {heading} {/* Use the heading prop here */}
          </h2>
          <div className="mb-3">
            <label className="block mb-1 text-xs">Title</label>
            <input
              type="text"
              value={title}
              onChange={handleTitleChange}
              className="border p-2 w-full text-xs"
              style={{ fontFamily: 'SF Pro Display' }}
            />
          </div>
          
          <div className="mb-3">
            <label className="block mb-1 text-xs">Cover Image</label>
            <input
              type="text"
              value={coverImage?.name ? coverImage?.name : singleData?.coverImageFileName}
              readOnly
              className="border p-2 w-full text-xs mb-2"
              style={{ fontFamily: 'SF Pro Display' }}
            />
            <input
              type="file"
              onChange={handleCoverImageChange}
              className="hidden"
              id="coverImageUpload"
            />
            <div className="flex gap-2">
              <label
                htmlFor="coverImageUpload"
                className="cursor-pointer text-xs"
                style={{
                  width: '64px', // Button width
                  height: '35px', // Button height
                  padding: '8px 16px', // Padding
                  borderRadius: '8px', // All sides rounded
                  boxShadow: '0 2px 8.8px 0 rgba(0, 0, 0, 0.14)', // Shadow
                }}
              >
                Browse
              </label>
              <button
                type="button"
                className="cursor-pointer text-xs"
                style={{
                  width: '64px', // Button width
                  height: '35px', // Button height
                  padding: '8px 16px', // Padding
                  borderRadius: '8px', // All sides rounded
                  boxShadow: '0 2px 8.8px 0 rgba(0, 0, 0, 0.14)', // Shadow
                }}
                onClick={() => alert('View Cover Image')}
              >
                View
              </button>
            </div>
          </div>
          <div className="mb-3">
            <label className="block mb-1 text-xs">File</label>
            <input
              type="text"
              value={ file?.name ? file?.name : singleData?.fileName}
              readOnly
              className="border p-2 w-full text-xs mb-2"
              style={{ fontFamily: 'SF Pro Display' }}
            />
            <input
              type="file"
              onChange={handleFileChange}
              className="hidden"
              id="fileUpload"
            />
            <div className="flex gap-2">
              <label
                htmlFor="fileUpload"
                className="cursor-pointer text-xs"
                style={{
                  width: '64px', // Button width
                  height: '35px', // Button height
                  padding: '8px 16px', // Padding
                  borderRadius: '8px', // All sides rounded
                  boxShadow: '0 2px 8.8px 0 rgba(0, 0, 0, 0.14)', // Shadow
                }}
              >
                Browse
              </label>
              <button
                type="button"
                className="cursor-pointer text-xs"
                style={{
                  width: '64px', // Button width
                  height: '35px', // Button height
                  padding: '8px 16px', // Padding
                  borderRadius: '8px', // All sides rounded
                  boxShadow: '0 2px 8.8px 0 rgba(0, 0, 0, 0.14)', // Shadow
                }}
                onClick={() => alert('View File')}
              >
                View
              </button>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="bg-red-500 text-white p-2 w-full text-xs"
          style={{ fontFamily: 'SF Pro Display' }}
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default AddMagazineForm;
