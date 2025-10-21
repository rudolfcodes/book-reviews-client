import { useQuery } from "@tanstack/react-query";
import { fetchPopularClubs } from "@/services/clubService";
import { ClubSimplified } from "@/types";

type FetchPopularClubsResponse = {
  data: ClubSimplified[];
};

export const useFetchPopularClubs = () => {
  const clubsQuery = useQuery<FetchPopularClubsResponse>({
    queryKey: ["popularClubs"],
    queryFn: fetchPopularClubs,
    staleTime: 10 * 60 * 1000,
    refetchOnWindowFocus: false,
  });

  return {
    popularClubs: clubsQuery.data?.data || [],
    isLoading: clubsQuery.isLoading,
    isError: clubsQuery.isError,
    refetch: clubsQuery.refetch,
  };
};
