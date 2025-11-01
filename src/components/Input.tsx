import React from "react";

interface InputProps {
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  placeholder?: string;
}

const Input = ({
  type,
  value,
  onChange,
  className,
  placeholder,
}: InputProps) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      className={`border rounded-md border-border-grey text-input-color px-8 w-full h-[54px] ${className}`}
      placeholder={placeholder}
    />
  );
};

export default Input;
