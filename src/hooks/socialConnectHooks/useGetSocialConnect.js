import { useState, useEffect } from "react";
import axios from "../../axios-folder/axios";
import { toast } from "react-toastify";

const useFetchSocialConnect = () => {
  const [socialConnects, setSocialConnects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSocialConnects = async () => {
      try {
        const response = await axios.get("api/v1/social-connect");
        const data = await response.data;

        if (data.error) {
          toast.error(`Error: ${data.error}`);
          return;
        }

        setSocialConnects(data.socialConnects);
        console.log(data.socialConnects);
      } catch (err) {
        toast.error("Failed to load socialConnects. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchSocialConnects();
  }, []);

  return {socialConnects, loading };
};

export default useFetchSocialConnect;
