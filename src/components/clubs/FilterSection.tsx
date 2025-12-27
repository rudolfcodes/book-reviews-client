import React from "react";
import FlexContainer from "../FlexContainer";

interface FilterSectionProps {
  label: string;
  children: React.ReactNode;
}

const FilterSection = ({ label, children }: FilterSectionProps) => {
  return (
    <FlexContainer className="flex-col gap-2">
      <h3>{label}</h3>
      <FlexContainer className="flex-col gap-1">{children}</FlexContainer>
    </FlexContainer>
  );
};

export default FilterSection;
