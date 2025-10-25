import { useMutation } from "@tanstack/react-query";
import { rsvpEvent } from "@/services/eventService";
import { useQueryClient } from "@tanstack/react-query";

const useRsvpEvent = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      clubId,
      eventId,
      rsvpStatus,
    }: {
      clubId: string;
      eventId: string;
      rsvpStatus: string;
    }) => rsvpEvent(clubId, eventId, rsvpStatus),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["events"] });
      queryClient.invalidateQueries({ queryKey: ["clubs"] });
    },
  });
};

export default useRsvpEvent;
