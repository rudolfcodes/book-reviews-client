import BaseButton from "@/components/buttons/BaseButton";
import React from "react";

interface PillProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
  className?: string;
}

const Pill = ({ label, isActive, onClick, className }: PillProps) => {
  return (
    <BaseButton
      type="button"
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium ${
        isActive ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
      } ${className || ""}`}
    >
      {label}
    </BaseButton>
  );
};

export default Pill;
