import { useState } from 'react';
import axios from '../../axios-folder/axios'; 
import { toast } from 'react-toastify';
import { signIn } from 'next-auth/react';

const useLogin = () => {
  const [loading, setLoading] = useState(false);

  const login = async (username, password) => {
    setLoading(true);
    try {
      const response = await axios.post('api/v1/auth/login', { username, password });
      const { accessToken, refreshToken } = response.data;

      // Use NextAuth to handle authentication
      const result = await signIn('credentials', {
        redirect: false,
        username,
        password,
        accessToken,
        refreshToken,
      });

      if (result.ok) {
        toast.success('Login successful');
        return { success: true };
      } else {
        toast.error(result.error || 'Login failed');
        return { success: false };
      }
    } catch (error) {
      toast.error('An error occurred during login');
      return { success: false };
    } finally {
      setLoading(false);
    }
  };

  return { login, loading };
};

export default useLogin;
