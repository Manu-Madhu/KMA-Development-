
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
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Clear errors on input change
  };

  return {
    formData,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useRegistrationValidation;
