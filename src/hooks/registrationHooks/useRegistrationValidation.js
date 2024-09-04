import React, { useState, useEffect, useCallback } from 'react';
import debounce from 'lodash.debounce';
import useUsernameChecker from './useUsernameChecker';

const useRegistrationValidation = (initialState, validateForm) => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [fileName, setFileName] = useState('');

  // Custom hook for checking username availability
  const { isAvailable, loading } = useUsernameChecker(formData.username);

  // Debounced function to handle username checking
  const debouncedCheckUsername = useCallback(
    debounce((username) => {
      setFormData((prevData) => ({ ...prevData, username }));
    }, 300),
    []
  );

  useEffect(() => {
    // Only trigger the username check when the username has 5 or more characters
    if (formData.username && formData.username.length >= 5) {
      debouncedCheckUsername(formData.username);
    }
  }, [formData.username, debouncedCheckUsername]);

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
      const file = files[0];
      setFormData({ ...formData, [name]: file });
      setFileName(file ? file.name : '');
    }
    // Handle checkbox
    else if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    }
    // Handle other input types
    else {
      // Directly update the formData state for other fields
      setFormData({ ...formData, [name]: value });
    }

    // Clear any previous errors for the field
    setErrors({ ...errors, [name]: '' });
  };



  return {
    formData,
    errors,
    fileName,
    loading,
    isAvailable,
    handleChange,
    handleSubmit,
    setFormData
  };
};

export default useRegistrationValidation;
