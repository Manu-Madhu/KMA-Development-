import { useState, useEffect } from "react";
import axios from "../../axios-folder/axios";
import { toast } from "react-toastify";

const useFetchPublications = () => {
  const [publications, setPublications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPublications = async () => {
      try {
        const response = await axios.get("api/v1/publications");
        const data = await response.data;

        if (data.error) {
          toast.error(`Error: ${data.error}`);
          return;
        }

        setPublications(data.publications);
        console.log(data.publications);
      } catch (err) {
        toast.error("Failed to load Publications. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchPublications();
  }, []);

  return { publications, loading };
};

export default useFetchPublications;
