import { useEffect, useState } from "react";
import axios from "../../axios-folder/axios"; // Adjust the path if needed
import { toast } from "react-toastify";

const useUsernameChecker = (username) => {
  const [isAvailable, setIsAvailable] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (username) {
      setLoading(true);
      const checkUsername = async () => {
        try {
          const response = await axios.post("/api/v1/check/username", { username });
          setIsAvailable(response.data.isAvailable);
          toast.success(response.data.msg);  
        } catch (error) {
          if (error.response && error.response.data) {
            toast.error(error.response.data.msg);  
          } else {
            toast.error("An unexpected error occurred");
          }
          setIsAvailable(false);
        } finally {
          setLoading(false);
        }
      };
      checkUsername();
    } else {
      setIsAvailable(null);
    }
  }, [username]);

  return { isAvailable, loading };
};

export default useUsernameChecker;
