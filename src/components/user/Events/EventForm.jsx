import React from 'react';
import { IoClose } from "react-icons/io5";

function EventForm({ event, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-xl font-semibold mb-4">Event Form</h2>
        <IoClose
          onClick={onClose}
          size={30}
          className="absolute top-2 right-2 text-[#475467] cursor-pointer"
        />
        <form>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="block w-full mb-4 border border-gray-300 rounded-lg p-2"
          />

          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="block w-full mb-4 border border-gray-300 rounded-lg p-2"
          />

          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="block w-full mb-4 border border-gray-300 rounded-lg p-2"
          ></textarea>

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg"
          >
            Submit
          </button>
        </form>
  
      </div>
    </div>
  );
}

export default EventForm;
