import { useState, useEffect } from "react";
import axios from "../../axios-folder/axios";
import { toast } from "react-toastify";

const useFetchReports = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await axios.get("api/v1/reports");
        const data = await response.data;

        if (data.error) {
          toast.error(`Error: ${data.error}`);
          return;
        }
        setReports(data.reports);
        console.log(data.reports)
      } catch (err) {
        setError(err);
        toast.error("Failed to load Reports. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchReports();
  }, []);

  return { reports, loading, error };
};

export default useFetchReports;
