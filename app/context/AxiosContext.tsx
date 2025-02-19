import axios, { AxiosInstance } from "axios";
import { createContext, useContext, useMemo } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
export const AxiosContext = createContext<AxiosInstance>({} as AxiosInstance);

export default function AxiosProvider({
  children,
}: React.PropsWithChildren<unknown>) {
  const router = useRouter();

  const axiosInstance = useMemo(() => {
    console.log(process.env.NEXT_PUBLIC_BASE_URL);

    const axiosInstance = axios.create({
      baseURL: process.env.NEXT_PUBLIC_BASE_URL,
      headers: {
        "Content-Type": "application/json",
      },
    });

    axiosInstance.interceptors.request.use((config) => {
      // Read token from anywhere, in this case directly from localStorage
      const token = Cookies.get("access_token");

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    });

    axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        if (error.response && error.response.status === 401) {
          router.replace(
            "/error?code=401&message=Unauthorized&redirect=/login"
          );
        } else if (error.response && error.response.status === 403) {
          router.replace(
            "/error?code=403&message=Session Expired&redirect=/login"
          );
        }
        return Promise.reject(error);
      }
    );

    return axiosInstance;
  }, []);

  return (
    <AxiosContext.Provider value={axiosInstance}>
      {children}
    </AxiosContext.Provider>
  );
}

export function useAxios() {
  return useContext(AxiosContext);
}
