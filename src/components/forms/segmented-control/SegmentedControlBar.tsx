"use client";

import React, { useState, useRef, useEffect } from "react";
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
  const [sliderStyle, setSliderStyle] = useState({ left: 0, width: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const activeIndex = options.findIndex(
      (option) => option.value === selectedOption
    );

    if (activeIndex !== -1 && buttonRefs.current[activeIndex]) {
      const button = buttonRefs.current[activeIndex];
      const container = containerRef.current;

      if (button && container) {
        const buttonRect = button.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        setSliderStyle({
          left: buttonRect.left - containerRect.left,
          width: buttonRect.width,
        });
      }
    }
  }, [selectedOption, options]);

  return (
    <div
      ref={containerRef}
      className={`relative flex w-full px-11 py-2 justify-between lg:w-[530px] bg-tertiary-grey rounded-2xl overflow-hidden ${
        className || ""
      }`}
    >
      <div
        className="absolute top-2 bg-white rounded-xl shadow-smooth h-[calc(100%-16px)] transition-all duration-300 ease-in-out"
        style={{
          left: `${sliderStyle.left}px`,
          width: `${sliderStyle.width}px`,
        }}
      />

      {options.map((option, index) => (
        <SegmentedControlButton
          key={option.value}
          ref={(el) => {
            buttonRefs.current[index] = el;
          }}
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
