import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/utils/axios";
import { CityResult } from "@/types/city";

type UseFetchCitiesOptions = {
  minSearchLength?: number;
  debounceDelay?: number;
  enabled?: boolean;
};

export const useFetchCities = (
  searchTerm: string,
  options?: UseFetchCitiesOptions
) => {
  // debounce the search term to avoid excessive requests
  const {
    minSearchLength = 3,
    debounceDelay = 300,
    enabled = true,
  } = options || {};
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, debounceDelay);

    return () => clearTimeout(timer);
  }, [searchTerm, debounceDelay]);

  return useQuery<CityResult[], Error>({
    queryKey: ["cities", debouncedSearchTerm],
    queryFn: async () => {
      try {
        const response = await axiosInstance
          .get(`/api/cities?search=${debouncedSearchTerm}`)
          .then((res) => res.data);
        return response.data;
      } catch (error) {
        console.error("Error fetching cities:", error);
        throw error;
      }
    },
    enabled: debouncedSearchTerm.trim().length >= minSearchLength && enabled,
    staleTime: 30 * 1000,
    retry: 1,
  });
};
