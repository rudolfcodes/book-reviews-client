import { useQuery } from "@tanstack/react-query";
import { fetchEvents } from "@/services/eventService";
import { EventApiResponse, EventFilterParams } from "@/types/event/event.types";

const useFetchEvents = (filters: EventFilterParams) => {
  const eventsQuery = useQuery<EventApiResponse>({
    queryKey: ["events", filters || { sortBy: "date", limit: 6 }],
    queryFn: () => fetchEvents(filters || { sortBy: "date", limit: 6 }),
    staleTime: 10 * 60 * 1000,
    refetchOnWindowFocus: false,
  });

  return {
    events: eventsQuery.data?.data?.docs || [],
    isLoading: eventsQuery.isLoading,
    isError: eventsQuery.isError,
    refetch: eventsQuery.refetch,
  };
};

export { useFetchEvents };
