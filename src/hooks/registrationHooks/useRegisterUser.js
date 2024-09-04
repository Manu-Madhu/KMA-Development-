
import { useState } from "react";
import axios from "../../axios-folder/axios";
import { toast } from "react-toastify";

const useRegisterUser = () => {
  const [loading, setLoading] = useState(false);

  const registerUser = async (actualFD) => {
    setLoading(true);
    try {
      const response = await axios.post("api/v1/register",actualFD);
      console.log("Response:", response);
      const data = response.data;
      console.log(data)

      if (data.msg) {
        if (response.status === 409) {
          toast.error(data.msg); 
        } else if (response.status === 400) {
          toast.error("Insufficient Data"); 
        } else if (response.status === 200) {
          toast.success("User Registration Successfully completed"); 
          return { success: true };
        } else {
          toast.error("Something went wrong. Please try again.");
        }
      }
      return { success: false };
    } catch (error) {
      console.error("Error during registration:", error.response || error.message || error);
      toast.error("Registration failed. Please check your details.");
      return { success: false };
    } finally {
      setLoading(false);
    }
  };

  return { registerUser, loading };
};

export default useRegisterUser;
