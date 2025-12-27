import { useFetchCities } from "@/hooks/cities/useFetchCities";
import { CityResult } from "@/types/city";
import { SwissCantonEnum } from "@/types/shared/location";
import { useState } from "react";
import FilterSection from "../../FilterSection";
import Input from "@/components/Input";
import LiveCitySearchResults from "@/components/hero/LiveClubSearchResults";
import BaseButton from "@/components/buttons/BaseButton";
import { ClubFilterParams } from "@/types";

type CityFilterProps = {
  filters: ClubFilterParams;
  onChange: (newFilters: ClubFilterParams) => void;
  onReset?: () => void;
};

const CityFilter = ({ filters, onChange, onReset }: CityFilterProps) => {
  const [cityInput, setCityInput] = useState<string>(
    filters.location?.city || ""
  );
  const [openCitySuggestions, setOpenCitySuggestions] = useState(false);
  const { data: cities, isLoading: citiesLoading } = useFetchCities(cityInput, {
    minSearchLength: 3,
    debounceDelay: 300,
    enabled: openCitySuggestions || false,
  });

  const handleCitySelect = (city: CityResult) => {
    onChange({
      ...filters,
      location: {
        city: city.name,
        canton: city.canton as SwissCantonEnum,
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

  return (
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
  );
};

export default CityFilter;
