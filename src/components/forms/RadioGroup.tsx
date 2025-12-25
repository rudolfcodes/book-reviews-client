import React from "react";
import FlexContainer from "../FlexContainer";

interface RadioGroupProps {
  options: string[];
  selectedOption: string;
  onOptionSelect: (option: string) => void;
  direction?: "horizontal" | "vertical";
}

const RadioGroup = ({
  options,
  selectedOption,
  onOptionSelect,
  direction = "vertical",
}: RadioGroupProps) => {
  return (
    <FlexContainer
      className={`gap-4 ${
        direction === "horizontal" ? "flex-row" : "flex-col"
      }`}
    >
      {options.map((option) => (
        <label key={option}>
          {option}
          <input
            type="radio"
            checked={selectedOption === option}
            onChange={() => onOptionSelect(option)}
          />
        </label>
      ))}
    </FlexContainer>
  );
};

export default RadioGroup;
