import { joinClub } from "@/services/clubService";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

const useJoinClub = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (clubId: string) => joinClub(clubId),
    onSuccess: () => {
      // Invalidate and refetch
      console.log("Invalidating queries...");
      queryClient.invalidateQueries({ queryKey: ["clubs"] });
      queryClient.invalidateQueries({ queryKey: ["user"] });
      console.log("Queries invalidated");
    },
  });
};

export default useJoinClub;
