import { joinClub } from "@/services/clubService";
import { useMutation } from "@tanstack/react-query";
import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

const useJoinClub = () => {
  return useMutation({
    mutationFn: (clubId: string) => joinClub(clubId),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["clubs"] });
    },
  });
};

export default useJoinClub;
