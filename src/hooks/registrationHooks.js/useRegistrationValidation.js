import React, { useState } from 'react';

const useRegistrationValidation = (initialState, validateForm) => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  // Handle form submission
  const handleSubmit = (e, callback) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      if (callback && typeof callback === 'function') {
        callback(); // Call the passed function if form is valid
      } else {
        console.error("Callback function is not provided or invalid.");
      }
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, type, value, checked, files } = e.target;
    
    // Handle file input
    if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] });
    } 
    // Handle checkbox
    else if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } 
  
    else {
      setFormData({ ...formData, [name]: value });
    }
    
    
    setErrors({ ...errors, [name]: '' });
  };

  return {
    formData,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useRegistrationValidation;
