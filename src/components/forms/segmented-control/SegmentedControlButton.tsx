import React, { forwardRef } from "react";

interface SegmentedControlButtonProps {
  label: string;
  value: string;
  isActive: boolean;
  onClick: (value: string) => void;
}

const SegmentedControlButton = forwardRef<
  HTMLButtonElement,
  SegmentedControlButtonProps
>(({ label, value, isActive, onClick }, ref) => {
  return (
    <button
      ref={ref}
      className={`relative z-10 bg-transparent py-2 px-6 text-center cursor-pointer rounded-xl transition-colors duration-300 whitespace-nowrap ${
        isActive ? "text-black font-medium" : "text-modern-primary font-normal"
      }`}
      onClick={() => onClick(value)}
    >
      {label}
    </button>
  );
});

SegmentedControlButton.displayName = "SegmentedControlButton";

export default SegmentedControlButton;
