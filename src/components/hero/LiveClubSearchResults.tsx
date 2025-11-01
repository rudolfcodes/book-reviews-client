import React from "react";
import { CityResult } from "@/types/city";

interface LiveCitySearchResultsProps {
  cities: CityResult[];
  isLoading: boolean;
  handleCitySelect: (city: CityResult) => void;
}

const LiveCitySearchResults = ({
  cities,
  handleCitySelect,
}: LiveCitySearchResultsProps) => {
  if (cities.length === 0) {
    return <div>No cities found.</div>;
  }

  return (
    <ul className="absolute top-[54px] w-full z-10">
      {cities.map((city, idx) => (
        <li
          key={`${city.name}-${idx}`}
          className="w-full border border-border-grey text-input-color bg-white  pl-12 py-3.5 hover:bg-error hover:text-white cursor-pointer"
          onClick={() => handleCitySelect(city)}
        >
          {city.name}
        </li>
      ))}
    </ul>
  );
};

export default LiveCitySearchResults;
