import { useQuery } from "@tanstack/react-query";
import { fetchClubs } from "@/services/clubService";
import { ClubsApiResponse, ClubSimplified } from "@/types";

const useFetchPopularClubs = () => {
  const clubsQuery = useQuery<ClubsApiResponse>({
    queryKey: ["clubs", { sortBy: "popular", limit: 3 }],
    queryFn: () => fetchClubs({ sortBy: "popular", limit: 3 }),
    staleTime: 10 * 60 * 1000,
    refetchOnWindowFocus: false,
  });

  return {
    popularClubs: clubsQuery.data?.data?.docs || [],
    isLoading: clubsQuery.isLoading,
    isError: clubsQuery.isError,
    refetch: clubsQuery.refetch,
  };
};

const useFetchNewestClubs = () => {
  const clubsQuery = useQuery<ClubsApiResponse>({
    queryKey: ["clubs", { sortBy: "newest", limit: 10 }],
    queryFn: () => fetchClubs({ sortBy: "newest", limit: 10 }),
  });

  return {
    newestClubs: clubsQuery.data?.data?.docs || [],
    isLoading: clubsQuery.isLoading,
    isError: clubsQuery.isError,
    refetch: clubsQuery.refetch,
  };
};

export { useFetchPopularClubs, useFetchNewestClubs };
