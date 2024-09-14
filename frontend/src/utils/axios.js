import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.Proud ? "" : "http://localhost:4000",
});

export default axiosInstance;
