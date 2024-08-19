import React, { useState } from 'react';

const AddBookForm = () => {
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
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto bg-white rounded shadow-lg">
      <h2 className="text-lg font-bold mb-4">Add Book</h2>
      <div className="mb-4">
        <label className="block mb-1">Title</label>
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          className="border p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Cover image</label>
        <div className="flex">
          <input
            type="text"
            value={coverImage}
            readOnly
            className="border p-2 flex-grow"
          />
          <input
            type="file"
            onChange={handleCoverImageChange}
            className="hidden"
            id="coverImageUpload"
          />
          <label htmlFor="coverImageUpload" className="border p-2 cursor-pointer">
            browse
          </label>
          <button type="button" className="border p-2 ml-2">
            view
          </button>
        </div>
      </div>
      <div className="mb-4">
        <label className="block mb-1">File</label>
        <div className="flex">
          <input
            type="text"
            value={file}
            readOnly
            className="border p-2 flex-grow"
          />
          <input
            type="file"
            onChange={handleFileChange}
            className="hidden"
            id="fileUpload"
          />
          <label htmlFor="fileUpload" className="border p-2 cursor-pointer">
            browse
          </label>
          <button type="button" className="border p-2 ml-2">
            view
          </button>
        </div>
      </div>
      <button type="submit" className="bg-red-500 text-white p-2 w-full">
        Upload
      </button>
    </form>
  );
};

export default AddBookForm; 