import { ClubFilterParams } from "@/types/club/club.types";
import axiosInstance from "@/utils/axios";

const fetchClubs = async (params: ClubFilterParams = {}) => {
  try {
    const { limit, language, name, location, currentPage, pageSize, sortBy } =
      params;

    const queryString = new URLSearchParams({
      ...(limit ? { limit: limit.toString() } : {}),
      ...(language ? { language } : {}),
      ...(name ? { name } : {}),
      ...(location?.city ? { city: location.city } : {}),
      ...(location?.canton ? { canton: location.canton } : {}),
      ...(location?.venueType ? { venueType: location.venueType } : {}),
      ...(location?.coordinates
        ? { coordinates: JSON.stringify(location.coordinates) }
        : {}),
      ...(currentPage ? { currentPage: currentPage.toString() } : {}),
      ...(pageSize ? { pageSize: pageSize.toString() } : {}),
      ...(sortBy ? { sortBy } : {}),
    }).toString();

    const response = await axiosInstance.get(`api/bookclubs?${queryString}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching popular clubs:", error);
  }
};

const joinClub = async (clubId: string) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("User is not authenticated");
    }
    const response = await axiosInstance.post(`api/bookclubs/${clubId}/join`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error joining club:", error);
  }
};

export { fetchClubs, joinClub };
