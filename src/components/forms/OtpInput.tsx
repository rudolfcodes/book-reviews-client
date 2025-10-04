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
      className={`border-2 border-blue-cream shadow-dark-input w-24 h-auto text-2xl rounded-md min-h-20 pl-10 ${
        className || ""
      }`}
    />
  );
};

export default OtpInput;
