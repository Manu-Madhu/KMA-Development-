import React, { useState } from 'react';
import ModalFrame from '@/components/admin/common/ModalFram';  // Adjust the import path as per your project structure
import MemberModal from '@/components/admin/members/MemberModal';  // Import MemberModal component

const ImageUploadForm = () => {
  const [imageName, setImageName] = useState('');
  const [eventName, setEventName] = useState('');
  const [showMemberModal, setShowMemberModal] = useState(false);

  const handleImageChange = (e) => {
    setImageName(e.target.files[0]?.name || '');
  };

  const handleEventNameChange = (e) => {
    setEventName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Image:', imageName);
    console.log('Event Name:', eventName);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto">
      <h2 className="text-lg font-bold mb-4">Add image to gallery</h2>
      <div className="mb-4">
        <label className="block mb-1">Upload image</label>
        <div className="flex">
          <input
            type="text"
            value={imageName}
            readOnly
            className="border p-2 flex-grow"
          />
          <input
            type="file"
            onChange={handleImageChange}
            className="hidden"
            id="imageUpload"
          />
          <label htmlFor="imageUpload" className="border p-2 cursor-pointer">
            browse
          </label>
          <button type="button" className="border p-2 ml-2" onClick={() => setShowMemberModal(true)}>
            view
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
      <button type="submit" className="bg-red-500 text-white p-2 w-full">
        Upload
      </button>

      {showMemberModal && (
        <ModalFrame>
          <MemberModal close={() => setShowMemberModal(false)} />
        </ModalFrame>
      )}
    </form>
  );
};

export default ImageUploadForm;
