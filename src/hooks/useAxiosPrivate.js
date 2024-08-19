import { axiosPrivate } from "../axios-folder/axios"
import { useEffect } from "react";
import useRefreshToken from "./useRefreshToken";
import { useSession } from 'next-auth/react'
import { regenerateRoute } from "@/utils/Endpoint";

const useAxiosPrivate = () => {
    const refresh = useRefreshToken();

    const { data: session, status } = useSession();
    const accessToken = session?.user?.accessToken;

    useEffect(() => {

        const requestIntercept = axiosPrivate.interceptors.request.use(
            config => {
                if (!config.headers['Authorization']) {
                    config.headers['Authorization'] = `Bearer ${accessToken}`;
                }
                return config;
            }, (error) => Promise.reject(error)
        );

        const responseIntercept = axiosPrivate.interceptors.response.use(
            response => response,
            async (error) => {
                // console.log("Main error", error)
                const prevRequest = error?.config;
                // console.log("prevRequest", prevRequest)
                if (error?.response?.status === 401 && !prevRequest?.sent) {
                    prevRequest.sent = true;

                    if (prevRequest.url === regenerateRoute) {
                        // trigger logout user
                        return
                    }

                    const newAccessToken = await refresh();

                    console.log({newAccessToken})

                    prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                    return axiosPrivate(prevRequest);
                }


                return Promise.reject(error);
            }
        );

        return () => {
            axiosPrivate.interceptors.request.eject(requestIntercept);
            axiosPrivate.interceptors.response.eject(responseIntercept);
        }
    }, [accessToken, refresh])

    return axiosPrivate;
}

export default useAxiosPrivate;