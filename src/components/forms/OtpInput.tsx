import React from "react";

interface OtpInputProps {
  onChange: (value: string) => void;
  value: string;
  className?: string;
}

const OtpInput = ({ onChange, value, className }: OtpInputProps) => {
  return (
    <input
      type="number"
      maxLength={1}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={className || ""}
    />
  );
};

export default OtpInput;
