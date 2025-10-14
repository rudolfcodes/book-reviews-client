import React from "react";
import { CityResult } from "@/types/city";

interface LiveCitySearchResultsProps {
  cities: CityResult[];
  isLoading: boolean;
}

const LiveCitySearchResults = ({
  cities,
  isLoading,
}: LiveCitySearchResultsProps) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (cities.length === 0) {
    return <div>No cities found.</div>;
  }

  return (
    <ul>
      {cities.map((city, idx) => (
        <li key={`${city.name}-${idx}`}>{city.name}</li>
      ))}
    </ul>
  );
};

export default LiveCitySearchResults;
