import { ClubFilterParams } from "@/types";
import FlexContainer from "../FlexContainer";
import TitleContainer from "../TitleContainer";
import CityFilter from "./filters/city/CityFilter";
import Pill from "./filters/Pill";
import { useState } from "react";

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
  const venueLabels = {
    online: "Online",
    "in-person": "In-Person",
    hybrid: "Hybrid",
  } as const;
  const [selectedVenueType, setSelectedVenueType] = useState<string | null>(
    null
  );

  if (isLoading) {
    return <div>Loading filters...</div>;
  }

  return (
    <FlexContainer className="flex-col gap-2">
      {/* Section above club list on the right has the sorting dropdown or options */}
      <TitleContainer title="Filters" className="mb-4" />
      <FlexContainer className="flex-col gap-4">
        <CityFilter filters={values} onChange={onChange} onReset={onReset} />
        {/* VenueFilter pills */}
        <FlexContainer className="flex flex-wrap gap-2">
          {(Object.keys(venueLabels) as Array<keyof typeof venueLabels>).map(
            (type) => (
              <Pill
                key={type}
                label={venueLabels[type]}
                isActive={selectedVenueType === type}
                onClick={() => {
                  setSelectedVenueType(type);
                  onChange({
                    ...values,
                    venueType: type,
                  });
                }}
              />
            )
          )}
        </FlexContainer>
        {/* LanguageFilter checkboxes */}
      </FlexContainer>
    </FlexContainer>
  );
};

export default ClubFilters;
