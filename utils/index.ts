import axios, { AxiosError } from "axios";
import { AwardIcon } from "lucide-react";

// const baseUrl = `http://${process.env.BACKEND_IP}/`;
const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/", // Define your base URL here
  // timeout: 5000, // Set timeout duration
  headers: {
    "Content-Type": "application/json", // Define common headers here
  },
  withCredentials: true,
});

// export default axiosInstance;

const axiosInstancetoPost = axios.create({
  baseURL: "http://localhost:5000/", // Define your base URL here
  // timeout: 5000, // Set timeout duration
  headers: {
    "Content-Type": "multipart/form-data", // Define common headers here
  },
  withCredentials: true,
});

const axiosInstancetoPostProduct = axios.create({
  baseURL: "http://localhost:5000/", // Define your base URL here
  // timeout: 5000, // Set timeout duration
  headers: {
    "Content-Type": "multipart/form-data", // Define common headers here
  },
  withCredentials: true,
});
export const useAxios = async <T>(
  method: "get" | "post" | "put" | "delete" | "patch",
  endpoint: string,
  data?: Record<any, any>
): Promise<T> => {
  try {
    const response = await axiosInstance({ method, url: endpoint, data });
    return response.data;
    // return response.statusText;
  } catch (error) {
    throw error as AxiosError;
  }
};

export const useAxiosPost = async <T>(
  method: "get" | "post" | "put" | "delete" | "patch",
  endpoint: string,
  data: Record<any, any>
): Promise<T> => {
  try {
    console.log("from categorie",method, endpoint, data);
    const response = await axiosInstancetoPost({ method, url: endpoint, data });

    return response.data;
  } catch (error) {
    throw error as AxiosError;
  }
};

export const useAxiosPostProduct = async <T>(
  method: "get" | "post" | "put" | "delete" | "patch",
  endpoint: string,
  data: Record<any, any>
): Promise<T> => {
  try {
    console.log(method, endpoint, data);
    console.log("only iMage", data.image);
    const response = await axiosInstancetoPostProduct({
      method,
      url: endpoint,
      data,
    });

    return response.data;
  } catch (error) {
    throw error as AxiosError;
  }
};
