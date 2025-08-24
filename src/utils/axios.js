import axios from "axios";

// This axios instance acts as a centralized gateway for all HTTP requests
const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/",
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to include the JWT token in every outgoing request
// This ensures all requests to protected endpoints are authenticated without needing manual token addition
axiosInstance.interceptors.request.use(
  (request) => {
    const token = localStorage.getItem("token");
    if (token) {
      request.headers["Authorization"] = `Bearer ${token}`;
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      try {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        window.location.href = "/login";
      } catch (err) {}
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
