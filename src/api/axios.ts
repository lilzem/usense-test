import axios, { AxiosInstance } from "axios";

export const BACKEND_URL = `${import.meta.env.VITE_API_URL}${
    import.meta.env.VITE_API_KEY
}`;

const axiosInstance: AxiosInstance = axios.create({
    baseURL: BACKEND_URL,
});

export default axiosInstance;
