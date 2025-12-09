import React from "react";
import FlexContainer from "../FlexContainer";
import { UseFormRegisterReturn } from "react-hook-form";

type TextAreaProps = {
  label: string;
  error: string | undefined;
  register: UseFormRegisterReturn;
  rows?: number;
  placeholder?: string;
  className?: string;
  required?: boolean;
};

const TextArea = ({
  label,
  placeholder,
  register,
  error,
  required,
  rows,
  className,
}: TextAreaProps) => {
  return (
    <FlexContainer className="flex-col gap-2">
      <label className="block text-auth-label">
        {label}
        <textarea
          className={`w-full mt-3 p-4 border border-border-grey rounded-md shadow-soft-card focus:outline-none focus:ring-2 focus:ring-blue-cream ${
            className || ""
          }`}
          rows={rows}
          required={required}
          placeholder={placeholder}
          {...register}
        />
        {error && <p className="text-error text-sm">{error}</p>}
      </label>
    </FlexContainer>
  );
};

export default TextArea;
