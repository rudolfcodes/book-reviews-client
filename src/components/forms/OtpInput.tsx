import React from "react";

interface OtpInputProps {
  onChange: (value: string) => void;
  onPaste?: (value: string) => void;
  value: string;
  className?: string;
}

const OtpInput = ({ onChange, value, className, onPaste }: OtpInputProps) => {
  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("Text").slice(0, 4);
    if (onPaste) onPaste(pasteData);
  };

  return (
    <input
      type="text"
      maxLength={1}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onPaste={handlePaste}
      className={`border-2 border-blue-cream shadow-dark-input rounded-md text-center text-base p-1 w-14 h-14
  sm:w-16 sm:h-16 sm:text-xl sm:p-3
  md:w-20 md:h-20 md:text-2xl md:p-4
  lg:w-24 lg:h-24 lg:text-2xl lg:p-6 ${className || ""}`}
    />
  );
};

export default OtpInput;
