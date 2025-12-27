"use client";

import React, { useState } from "react";
import FlexContainer from "../FlexContainer";
import TitleContainer from "../TitleContainer";
import TextContainer from "../TextContainer";
import Input from "../Input";
import { useRouter } from "next/navigation";
import BaseButton from "../buttons/BaseButton";
import LiveCitySearchResults from "./LiveClubSearchResults";
import SelectDropdown from "../SelectDropdown";
import { clubFilterData, useClubFilters } from "@/hooks/useClubFilters";
import StatsBar from "./StatsBar";
import stats from "@/data/statsData";
import { useFetchCities } from "@/hooks/cities/useFetchCities";

const SearchClubs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [openCitySuggestions, setOpenCitySuggestions] = useState(false);
  const router = useRouter();

  const { handleFilterSelect } = useClubFilters();
  const { data: cities, isLoading } = useFetchCities(searchTerm, {
    minSearchLength: 3,
    debounceDelay: 300,
    enabled: openCitySuggestions,
  });

  // Only navigate to search results upon clicking the search submit button
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setOpenCitySuggestions(true);
  };

  const handleCitySelect = (city: { name: string }) => {
    setSearchTerm(city.name);
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
    <FlexContainer className="flex-col lg:max-w-[455px]">
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

        {searchTerm.trim().length >= 3 &&
          cities &&
          cities.length > 0 &&
          openCitySuggestions && (
            <LiveCitySearchResults
              cities={cities}
              isLoading={isLoading}
              handleCitySelect={handleCitySelect}
            />
          )}
      </FlexContainer>
      <TextContainer
        className="mt-2 text-sm text-gray-500"
        text="Turn on location to see nearby clubs"
      />

      <FlexContainer className="mt-6 w-full gap-4 md:flex-row flex-col">
        {clubFilterData.map((filter) => (
          <SelectDropdown
            key={filter.id}
            id={filter.id}
            title={filter.name}
            data={filter.options}
            onSelect={(selectedItem) =>
              handleFilterSelect(filter.id, selectedItem.name)
            }
            position="top-full-left-0"
          />
        ))}
      </FlexContainer>
      <FlexContainer className="mt-2 w-full">
        <StatsBar stats={stats} />
      </FlexContainer>
    </FlexContainer>
  );
};

export default SearchClubs;
