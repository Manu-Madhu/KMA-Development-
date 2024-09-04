"use client";
import { useState, useEffect } from "react";
import axios from "../../axios-folder/axios";
import { toast } from "react-toastify";

const useGetUser = (userId) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      if (!userId) return;

      try {
        const response = await axios.get(`api/v1/member/${userId}`);
        const data = response.data;
        console.log(data)
        if (data.error) {
          toast.error(`Error: ${data.error}`);
        } else {
          setUser(data.member); 
        }
      } catch (error) {
        toast.error("Failed to fetch user data");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  return { user, loading };
};

export default useGetUser;
