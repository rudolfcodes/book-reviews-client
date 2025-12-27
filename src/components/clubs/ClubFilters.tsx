import { ClubFilterParams } from "@/types";
import FlexContainer from "../FlexContainer";
import TitleContainer from "../TitleContainer";
import CityFilter from "./filters/city/CityFilter";

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
  if (isLoading) {
    return <div>Loading filters...</div>;
  }

  return (
    <FlexContainer className="flex-col gap-2">
      {/* Section above club list on the right has the sorting dropdown or options */}
      <TitleContainer title="Filters" className="mb-4" />
      <FlexContainer className="flex-col gap-4">
        <CityFilter filters={values} onChange={onChange} onReset={onReset} />
      </FlexContainer>
    </FlexContainer>
  );
};

export default ClubFilters;
