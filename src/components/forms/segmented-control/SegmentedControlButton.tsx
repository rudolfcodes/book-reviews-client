import React from "react";

interface SegmentedControlButtonProps {
  label: string;
  value: string;
  isActive: boolean;
  onClick: (value: string) => void;
}

const SegmentedControlButton = ({
  label,
  value,
  isActive,
  onClick,
}: SegmentedControlButtonProps) => {
  return (
    <button
      className={`flex-1 bg-white py-2 px-4 text-center cursor-pointer rounded-xl ${
        isActive
          ? "bg-modern-primary text-white font-medium"
          : "bg-white text-modern-primary font-normal hover:bg-gray-100"
      }`}
      onClick={() => onClick(value)}
    >
      {label}
    </button>
  );
};

export default SegmentedControlButton;
