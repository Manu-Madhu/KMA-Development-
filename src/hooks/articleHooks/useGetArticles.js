import { useState, useEffect } from "react";
import axios from "../../axios-folder/axios";
import { toast } from "react-toastify";

const useFetchArticles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get("api/v1/article");
        const data = await response.data;

        if (data.error) {
          toast.error(`Error: ${data.error}`);
          return;
        }
        setArticles(data.articles);
      } catch (err) {
        setError(err);
        toast.error("Failed to load articles. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return { articles, loading, error };
};

export default useFetchArticles;
