"use client";
import React from "react";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";

const ImageModal = ({
  isOpen,
  onClose,
  images,
  currentIndex,
  onNext,
  onPrevious,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-85 flex justify-center items-center z-50 overflow-hidden">
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-white bg-red-500 rounded-full p-2 text-xl"
      >
        <FaTimes />
      </button>
      <div className="relative w-full lg:w-1/2  m-3 bg- rounded-lg overflow-hidden">
        <button
          onClick={onPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-red-500 rounded-full p-2 text-xl"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-xl bg-red-500 rounded-full p-2 "
        >
          <FaArrowRight />
        </button>
        <div className="flex justify-center items-center rounded-2xl">
          <img
            src={images[currentIndex].fileUrl}
            alt={images[currentIndex].name}
            className="w-full h-full max-w-[500px] max-h-[500px] object-contain rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
