// import axios from "@/axios-folder/axios";
// import { toast } from "react-toastify";

// export const useSubmitForm = () => {
//   const submitForm = async (formData) => {
//     try {
//       // Use POST to submit form data
//       const response = await axios.post('/api/v1/hall-enquiries', formData);
//       const data = response.data;
//       console.log(data)
      
//       // Check if the request was successful
//       if (response.status === 201) {
//         // Display success toast
//         toast.success('Enquiry submitted successfully!');
//       } else {
//         // Show an error message
//         toast.error(data.msg || "Error submitting the form");
//       }
//     } catch (error) {
//       // Catch and display any error
//       toast.error("An error occurred while submitting the form");
//       console.error('Error:', error);
//     }
//   };

//   return { submitForm };
// };

import axios from "@/axios-folder/axios";
import { toast } from "react-toastify";

export const useSubmitForm = () => {
  const ACCESS_TOKEN_SECRET="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWY5M2FmNTE5ZDM5ZDcyZWNmZjMwMGQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MjU0NzE5OTMsImV4cCI6MTcyNTU1ODM5M30.LunS8oZZlvVom5tKM_TuNNFHOzWaRDQ4cEwyKkfQWNU"
  const submitForm = async (formData) => {
    try {
      // Retrieve the token from localStorage (or your preferred method)
      const token = localStorage.getItem('authToken');

      // Set up the config with Authorization header
      const config = {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN_SECRET}`,  // Add the token here
        },
      };

      // Make the POST request with formData and config
      const response = await axios.post('/api/v1/hall-enquiries', formData, config);
      
      // Check if the request was successful
      if (response.status === 201) {
        toast.success('Enquiry submitted successfully!');
      } else {
        toast.error(response.data?.msg || "Error submitting the form");
      }
    } catch (error) {
      // Handle errors
      toast.error("An error occurred while submitting the form.");
      console.error('Error:', error);
    }
  };

  return { submitForm };
};
