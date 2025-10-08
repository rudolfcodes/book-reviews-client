import { useQuery } from "@tanstack/react-query";
import { fetchUserProfile } from "@/components/user/UserProfile";

export const useGetUserProfile = ({ userId }: { userId: string }) => {
  const userQuery = useQuery({
    queryKey: ["userProfile", userId],
    queryFn: () => fetchUserProfile({ userId }),
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
