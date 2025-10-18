import axiosInstance from "@/utils/axios";

/* Create function to fetch popular clubs from db. Get the 3 clubs with the highest amount(max is 20) of members. Clubs must still be active */
const fetchPopularClubs = async () => {
  try {
    const response = await axiosInstance.get("api/bookclubs/popular?limit=3");
    return response.data;
  } catch (error) {
    console.error("Error fetching popular clubs:", error);
  }
};

export { fetchPopularClubs };
