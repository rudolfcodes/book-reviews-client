"use client";

import React, { useState, useEffect } from "react";
import FlexContainer from "./FlexContainer";
import TitleContainer from "./TitleContainer";
import TextContainer from "./TextContainer";
import Input from "./Input";
import { useRouter } from "next/navigation";
import axiosInstance from "@/utils/axios";
import { useQuery } from "@tanstack/react-query";
import BaseButton from "./buttons/BaseButton";
import LiveCitySearchResults from "./LiveClubSearchResults";

const SearchClubs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState(searchTerm);
  const [openCitySuggestions, setOpenCitySuggestions] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  const {
    data: cities = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["cities", debouncedSearch],
    queryFn: () =>
      axiosInstance
        .get(`/api/cities?search=${debouncedSearch}`)
        .then((res) => res.data),
    enabled: debouncedSearch.trim().length >= 3,
    staleTime: 30 * 1000,
  });

  // Only navigate to search results upon clicking the search submit button
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setDebouncedSearch(e.target.value);
    setOpenCitySuggestions(true);
  };

  const handleCitySelect = (city: { name: string }) => {
    setSearchTerm(city.name);
    setDebouncedSearch(city.name);
    setOpenCitySuggestions(false);
    //router.push(`/clubs?search=${encodeURIComponent(city.name)}`);
  };

  const submitSearchClubs = () => {
    if (searchTerm.trim().length >= 3) {
      // navigate to the search results that lists the clubs in that city
      router.push(`/clubs?search=${encodeURIComponent(searchTerm.trim())}`);
    }
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
      <FlexContainer className="mt-6 w-full relative">
        {/* Icon */}
        <span className="absolute left-2 top-1/2 transform -translate-y-1/2"></span>
        <Input
          type="text"
          className="relative"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="City or postal code..."
        />

        <BaseButton
          type="submit"
          onClick={submitSearchClubs}
          disabled={searchTerm.trim().length < 3}
          className="absolute right-0 bg-error text-white px-8 py-3.5 rounded-md lg:w-[150px] h-full"
        >
          Search
        </BaseButton>

        {debouncedSearch.trim().length >= 3 &&
          cities?.data?.length > 0 &&
          openCitySuggestions && (
            <LiveCitySearchResults
              cities={cities?.data}
              isLoading={isLoading}
              handleCitySelect={handleCitySelect}
            />
          )}
      </FlexContainer>
      <TextContainer
        className="mt-2 text-sm text-gray-500"
        text="Turn on location to see nearby clubs"
      />

      {/* Radius, Language & Genre Filters using the SelectDropdown component */}
    </FlexContainer>
  );
};

export default SearchClubs;
