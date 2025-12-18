import axiosInstance from "@/utils/axios";
import { AxiosError } from "axios";

const fetchCurrentUser = async () => {
  const response = await axiosInstance.get("/api/users/me");
  return response.data;
};

const fetchUserByClubId = async (clubId: string) => {
  try {
    const response = await axiosInstance.get(`/api/users/${clubId}`);
    return response.data;
  } catch (error: unknown) {
    if (error instanceof AxiosError && error.response) {
      console.error(
        "Something went wrong fetching the user: ",
        error.response?.data?.message || error.message
      );
    }
    console.error("Something went wrong fetching the user: ", error);
  }
};

export { fetchCurrentUser, fetchUserByClubId };
