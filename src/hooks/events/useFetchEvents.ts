import { useQuery } from "@tanstack/react-query";
import { fetchEvents } from "@/services/eventService";
import { EventApiResponse, EventFilterParams } from "@/types/event/event.types";

const useFetchEvents = (
  filters: EventFilterParams = { sortBy: "date", limit: 6 }
) => {
  const eventsQuery = useQuery<EventApiResponse>({
    queryKey: ["events", filters],
    queryFn: () => fetchEvents(filters),
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
