import React, { useState } from 'react';

const UploadModal = () => {
  const [image, setImage] = useState('');
  const [eventName, setEventName] = useState('');

  const handleImageChange = (e) => {
    setImage(e.target.files[0]?.name || '');
  };

  const handleEventNameChange = (e) => {
    setEventName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Image:', image);
    console.log('Event Name:', eventName);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 w-[600px] mx-auto bg-white rounded shadow-lg">
      <h2 className="text-lg font-bold mb-4">Add image to gallery</h2>
      <div className="mb-4">
        <label htmlFor="imageUpload" className="block mb-1">Upload image</label>
        <input
          type="text"
          value={image}
          readOnly
          className="border p-2 w-full"
        />
        <input
          type="file"
          onChange={handleImageChange}
          className="hidden"
          id="imageUpload"
        />
        <div className="flex mt-2 gap-2">
          <label
            htmlFor="imageUpload"
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
        <label htmlFor="eventName" className="block mb-1">Event name</label>
        <input
          type="text"
          id="eventName"
          value={eventName}
          onChange={handleEventNameChange}
          className="border p-2 w-full"
        />
      </div>
      <button type="submit" className="bg-red-500 text-white p-2 w-full">
        Upload
      </button>
    </form>
  );
};

export default UploadModal;
