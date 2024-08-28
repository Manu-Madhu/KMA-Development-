import { useState, useEffect } from "react";
import axios from "../../axios-folder/axios";
import { toast } from "react-toastify";

const useFetchMagazines = () => {
  const [magazines, setMagazines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMagazines = async () => {
      try {
        const response = await axios.get("api/v1/magazine");
        const data = await response.data;

        if (data.error) {
          toast.error(`Error: ${data.error}`);
          return;
        }
        setMagazines(data.magazines);
        console.log(data.magazines)
      } catch (err) {
        setError(err);
        toast.error("Failed to load Magazines. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchMagazines();
  }, []);

  return { magazines, loading, error };
};

export default useFetchMagazines;
