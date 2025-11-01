import axiosInstance from "@/utils/axios";

const fetchCurrentUser = async () => {
  const response = await axiosInstance.get("/api/users/me");
  return response.data;
};

export { fetchCurrentUser };
