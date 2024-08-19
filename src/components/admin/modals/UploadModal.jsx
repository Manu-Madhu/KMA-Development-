import useAxiosPrivate from '@/hooks/useAxiosPrivate';
import { bannersRoute, galleryRoute } from '@/utils/Endpoint';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const UploadModal = ({ close, getData, tab }) => {
  const [file, setFile] = useState('');
  const [name, setName] = useState('');

  const handlefileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const axiosPrivate = useAxiosPrivate()

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Handle form submission
    console.log('file:', file);
    console.log('Name:', name);

    try {
      const formdata = new FormData()
      formdata.append('file', file)
      formdata.append('name', name)

      let route = tab === "gallery" ? galleryRoute : tab === "banner" ? bannersRoute : ''
  
      const response = await axiosPrivate.post(route, formdata)
  
      if(response.status === 201){
        toast.success('file uploaded')
        getData()
        close()
      }else{
        toast.error('Failed to upload file')
      }
      
    } catch (error) {
      console.log(error)
      toast.error('Failed to upload file')
      
    }
    

  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-70 z-50">
      <div className="relative bg-white rounded shadow-lg w-[600px] p-4 mx-auto">
        <button
          onClick={close}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          <span className="text-2xl">&times;</span> {/* Cross icon */}
        </button>
        <form onSubmit={handleSubmit}>
          <h2 className="text-lg font-bold mb-4">Add image to {tab}</h2>
          <div className="mb-4">
            <label htmlFor="fileUpload" className="block mb-1">Upload Image</label>
            <input
              type="text"
              value={file?.name}
              readOnly
              className="border p-2 w-full"
            />
            <input
              type="file"
              onChange={handlefileChange}
              className="hidden"
              id="fileUpload"
            />
            <div className="flex mt-2 gap-2">
              <label
                htmlFor="fileUpload"
                className="border p-2 text-sm cursor-pointer w-[80px] text-center rounded-lg bg-white text-black"
              >
                Browse
              </label>
              <button
                type="button"
                className="border p-2 text-sm w-[80px] rounded-lg bg-white text-black"
              >
                View
              </button>
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-1">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              className="border p-2 w-full"
            />
          </div>
          <button type="submit" className="bg-red-500 text-white p-2 w-full">
            Upload
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadModal;
