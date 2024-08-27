import { useState, useEffect } from "react";
import axios from "../../axios-folder/axios";
import { toast } from "react-toastify";

const useFetchNewsLetters = () => {
  const [newsLetters, setNewsLetters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNewsLetters = async () => {
      try {
        const response = await axios.get("api/v1/newsletter");
        const data = await response.data;
        if (data.error) {
          toast.error(`Error: ${data.error}`);
          return;
        }

        setNewsLetters(data.newsletters);
        console.log(data.newsletters);
      } catch (err) {
        toast.error("Failed to load Publications. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchNewsLetters();
  }, []);

  return { newsLetters, loading };
};

export default useFetchNewsLetters;
