import React, { useState } from 'react';

const AddMagazineForm = ({ close, heading }) => {
  const [title, setTitle] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [file, setFile] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleCoverImageChange = (e) => {
    setCoverImage(e.target.files[0]?.name || '');
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]?.name || '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Title:', title);
    console.log('Cover Image:', coverImage);
    console.log('File:', file);
  };

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
              value={coverImage}
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
              value={file}
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
