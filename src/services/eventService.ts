// We need functions to fetch events, create events and manage event attendees
import { EventFilterParams } from "@/types/event/event.types";
import axiosInstance from "@/utils/axios";

const fetchEvents = async (params: EventFilterParams = {}) => {
  try {
    const {
      limit,
      language,
      title,
      dateRange,
      location,
      currentPage,
      pageSize,
      sortBy,
    } = params;

    // construct query string
    const queryString = new URLSearchParams({
      ...(limit ? { limit: limit.toString() } : {}),
      ...(language ? { language } : {}),
      ...(title ? { title } : {}),
      ...(dateRange?.from ? { dateFrom: dateRange.from.toISOString() } : {}),
      ...(dateRange?.to ? { dateTo: dateRange.to.toISOString() } : {}),
      ...(location?.city ? { city: location.city } : {}),
      ...(location?.canton ? { canton: location.canton } : {}),
      ...(location?.venueType ? { venueType: location.venueType } : {}),
      ...(currentPage ? { currentPage: currentPage.toString() } : {}),
      ...(pageSize ? { pageSize: pageSize.toString() } : {}),
      ...(sortBy ? { sortBy } : {}),
    }).toString();

    const response = await axiosInstance.get(`api/events?${queryString}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching events:", error);
  }
};

export { fetchEvents };
