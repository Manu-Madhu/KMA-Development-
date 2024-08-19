import { regenerateRoute } from '@/utils/Endpoint';
import axios from '../axios-folder/axios';
import { useSession } from 'next-auth/react';

const useRefreshToken = () => {
   
    const { data: session, status } = useSession();
    const refreshToken = session?.user?.refreshToken;

    const refresh = async () => {
        const response = await axios.post(regenerateRoute, {
            refreshToken: refreshToken
        });

        console.log({response})

        return response?.data?.accessToken;
    }
    return refresh;
};

export default useRefreshToken;