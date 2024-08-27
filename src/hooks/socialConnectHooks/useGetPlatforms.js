import { toast } from "react-toastify";
import axios from "@/axios-folder/axios";
import { useEffect, useState } from "react";

const useFetchPlatforms = () => {
    const [platforms, setPlatforms] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchPlatforms = async () => {
        try {
          const response = await axios.get("api/v1/platform"); 
          const data = await response.data;
  
          if (data.error) {
            toast.error(`Error: ${data.error}`);
            return;
          }
  
          setPlatforms(data.platforms); 
        } catch (err) {
          toast.error("Failed to load platforms. Please try again.");
        } finally {
          setLoading(false);
        }
      };
  
      fetchPlatforms();
    }, []);
  
    return { platforms, loading };
  };
  

  export default useFetchPlatforms ;