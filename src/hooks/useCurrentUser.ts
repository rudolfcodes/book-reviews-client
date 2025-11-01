import { useQuery } from "@tanstack/react-query";
import { fetchCurrentUser } from "@/services/userService";

export const useCurrentUser = () => {
  const userQuery = useQuery({
    queryKey: ["currentUser"],
    queryFn: fetchCurrentUser,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });

  return {
    user: userQuery.data || null,
    isLoading: userQuery.isLoading,
    isError: userQuery.isError,
    refetch: userQuery.refetch,
  };
};
