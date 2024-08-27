import { useState, useEffect } from "react";
import axios from "../../axios-folder/axios";
import { toast } from "react-toastify";

const useFetchELibrary = () => {
  const [eLibrary, setELibrary] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchELibrary = async () => {
        setLoading(true);
      try {
        const response = await axios.get("api/v1/e-library");
        const data = await response.data;
        if (data.error) {
          toast.error(`Error: ${data.error}`);
          return;
        }

        setELibrary(data.eLibraries);
        console.log(data.eLibraries);
      } catch (err) {
        toast.error("Failed to load Publications. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchELibrary();
  }, []);

  return { eLibrary, loading };
};

export default useFetchELibrary;
