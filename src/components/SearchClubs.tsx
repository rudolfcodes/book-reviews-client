"use client";

import React, { useState, useEffect } from "react";
import FlexContainer from "./FlexContainer";
import TitleContainer from "./TitleContainer";
import TextContainer from "./TextContainer";
import Input from "./Input";
import { useRouter } from "next/navigation";
import axiosInstance from "@/utils/axios";
import { useQuery } from "@tanstack/react-query";

const useClubSearch = (query: string) => {
  return useQuery({
    queryKey: ["clubs", query],
    queryFn: () =>
      axiosInstance
        .get("/api/clubs", { params: { search: query } })
        .then((res) => res.data),
    enabled: query.trim().length >= 3,
    staleTime: 30 * 1000,
  });
};

const SearchClubs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState(searchTerm);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  const {
    data: fetchedClubs = [],
    isLoading,
    error,
  } = useClubSearch(debouncedSearch);

  // Only navigate to search results upon clicking the search submit button
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <FlexContainer className="flex-col md:max-w-[455px]">
      <TitleContainer
        title="Find a club near you, or start your own."
        className="mb-8 font-openSans"
        coloredText={{ text: "Clubs", color: "hero" }}
      />
      <TextContainer
        className="font-openSans text-base"
        text="Browse clubs by city, language, and genre. RSVP in two clicks."
      />
      {/* Input field for searching clubs */}
      <FlexContainer className="mt-6 w-full relative">
        {/* Icon */}
        <span className="absolute left-2 top-1/2 transform -translate-y-1/2"></span>
        <Input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          className="relative"
        />
        <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-error text-white px-8 py-3.5 rounded-md lg:w-[150px]">
          Search
        </button>
      </FlexContainer>
    </FlexContainer>
  );
};

export default SearchClubs;
