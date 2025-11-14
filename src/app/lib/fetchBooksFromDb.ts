import axiosInstance from "@/utils/axios";
import { AxiosError } from "axios";

export const fetchBooksFromDb = async () => {
  try {
    const response = await axiosInstance.get(`/api/books`);
    return response.data;
  } catch (error: unknown) {
    if (error instanceof AxiosError && error.response) {
      console.error(
        "Error fetching books from database: ",
        error.response.data
      );
      throw new Error(error.response.data.error || "Failed to fetch books");
    } else {
      console.error("Error fetching books from database: ", error);
      throw new Error("Failed to fetch books from database");
    }
  }
};
