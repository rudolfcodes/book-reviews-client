import React from "react";
import FlexContainer from "../FlexContainer";

type TextAreaProps = {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  rows?: number;
  className?: string;
};

const TextArea = ({
  label,
  placeholder,
  value,
  onChange,
  rows,
  className,
}: TextAreaProps) => {
  return (
    <FlexContainer className="flex-col gap-2">
      <label className="block text-auth-label">
        {label}
        <textarea
          className={`w-full p-4 border border-border-grey rounded-md shadow-soft-card focus:outline-none focus:ring-2 focus:ring-blue-cream ${
            className || ""
          }`}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={rows}
        />
      </label>
    </FlexContainer>
  );
};

export default TextArea;
