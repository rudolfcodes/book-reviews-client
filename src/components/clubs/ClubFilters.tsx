import { ClubFilterParams } from "@/types";
import { useState } from "react";
import FlexContainer from "../FlexContainer";
import TitleContainer from "../TitleContainer";
import FilterSection from "./FilterSection";
import Input from "../Input";
import LiveCitySearchResults from "../hero/LiveClubSearchResults";
import { useFetchCities } from "@/hooks/cities/useFetchCities";
import { CityResult } from "@/types/city";
import { SwissCantonEnum } from "@/types/shared/location";
import BaseButton from "../buttons/BaseButton";

interface ClubFiltersProps {
  values: ClubFilterParams;
  onChange: (newFilters: ClubFilterParams) => void;
  onReset?: () => void;
  isLoading?: boolean;
}

const ClubFilters = ({
  values,
  onChange,
  onReset,
  isLoading,
}: ClubFiltersProps) => {
  const [cityInput, setCityInput] = useState(values.location?.city || "");
  const [openCitySuggestions, setOpenCitySuggestions] = useState(false);
  const { data: cities, isLoading: citiesLoading } = useFetchCities(
    values.location?.city || "",
    {
      minSearchLength: 3,
      debounceDelay: 300,
      enabled: openCitySuggestions || false,
    }
  );

  const handleCitySelect = (city: CityResult) => {
    onChange({
      ...values,
      location: {
        ...values.location,
        city: city.name,
        canton: city.canton as SwissCantonEnum | undefined,
        postalCode: city.postalCode,
      },
    });

    setCityInput(city.name);
    setOpenCitySuggestions(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCity = e.target.value;
    setCityInput(newCity);

    if (newCity.trim().length >= 3) {
      setOpenCitySuggestions(true);
    } else {
      setOpenCitySuggestions(false);
    }
  };

  if (isLoading) {
    return <div>Loading filters...</div>;
  }

  return (
    <FlexContainer className="flex-col gap-2">
      {/* Section above club list on the right has the sorting dropdown or options */}
      <TitleContainer title="Filters" className="mb-4" />
      <FlexContainer className="flex-col gap-4">
        <FilterSection label="Location">
          <Input
            type="text"
            className="relative"
            value={cityInput}
            onChange={handleInputChange}
            placeholder="Enter city"
            disabled={citiesLoading}
          />

          {openCitySuggestions && cities && !citiesLoading && (
            <LiveCitySearchResults
              cities={cities}
              isLoading={citiesLoading}
              handleCitySelect={handleCitySelect}
            />
          )}

          {openCitySuggestions && cities && cities.length === 0 && (
            <div className="absolute top-[54px] w-full z-10 border border-border-grey text-input-color bg-white  pl-12 py-3.5">
              No cities found.
            </div>
          )}

          {onReset && (
            <BaseButton
              type="button"
              onClick={onReset}
              className="mt-2 text-sm text-error underline"
            >
              Reset Filters
            </BaseButton>
          )}
        </FilterSection>
      </FlexContainer>
    </FlexContainer>
  );
};

export default ClubFilters;
