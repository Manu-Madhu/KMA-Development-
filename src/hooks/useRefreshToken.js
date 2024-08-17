import axios from '../axios-folder/axios';
import { useSession } from 'next-auth/react';

const useRefreshToken = () => {
   
    const { data: session, status } = useSession();
    const refreshToken = session?.user?.refreshToken;

    const refresh = async () => {
        const response = await axios.post('/api/auth/refresh-token', {
            refreshToken: refreshToken
        });

        return response?.data?.accessToken;
    }
    return refresh;
};

export default useRefreshToken;