import React from "react";
import SegmentedControlButton from "./SegmentedControlButton";

type Option = {
  label: string;
  value: string;
};

interface SegmentedControlBarProps {
  options: Option[];
  selectedOption: string;
  onOptionSelect(option: string): void;
  className?: string;
}

const SegmentedControlBar = ({
  options,
  selectedOption,
  onOptionSelect,
  className,
}: SegmentedControlBarProps) => {
  return (
    <div
      className={`flex w-full px-11 py-2 justify-between lg:w-[530px] bg-tertiary-grey rounded-2xl overflow-hidden ${
        className || ""
      }`}
    >
      {options.map((option) => (
        <SegmentedControlButton
          key={option.value}
          label={option.label}
          value={option.value}
          isActive={option.value === selectedOption}
          onClick={onOptionSelect}
        />
      ))}
    </div>
  );
};

export default SegmentedControlBar;
