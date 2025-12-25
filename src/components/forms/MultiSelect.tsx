import { useState } from "react";
import BaseButton from "../buttons/BaseButton";
import FlexContainer from "../FlexContainer";
import ChevronDownIcon from "../icons/ChevronDown";
import ChevronUpIcon from "../icons/ChevronUp";

interface MultiSelectProps {
  options: string[];
  selectedOptions: string[];
  onSelectionChange: (selected: string[]) => void;
  isOpen?: boolean;
  defaultText?: string;
  label?: string;
  disabled?: boolean;
}

const MultiSelect = ({
  options,
  selectedOptions,
  onSelectionChange,
  label,
  disabled,
  defaultText = "Select options",
}: MultiSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {label && <label className="block mb-1 font-medium">{label}</label>}
      <BaseButton
        type="button"
        disabled={disabled}
        className="flex w-full justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>
          {selectedOptions.length > 0
            ? selectedOptions.join(", ")
            : defaultText}
        </span>
        <FlexContainer className="flex flex-col ml-4 gap-2">
          <ChevronUpIcon />
          <ChevronDownIcon />
        </FlexContainer>
      </BaseButton>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
          <ul className="">
            {options.map((option) => (
              <li key={option} onClick={() => onSelectionChange}>
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MultiSelect;
