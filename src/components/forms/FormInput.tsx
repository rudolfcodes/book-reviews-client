import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface FormInputProps {
  label: string;
  type: string;
  register: UseFormRegisterReturn;
  error?: string;
  required?: boolean;
  className?: string;
  placeholder?: string;
  icon?: React.ReactNode;
  variant?: "auth" | "default";
}

const FormInput = ({
  label,
  type,
  register,
  error,
  required,
  className,
  placeholder,
  icon,
  variant = "default",
}: FormInputProps) => {
  const variants = {
    auth: "h-14 rounded-md border-2 border-blue-cream shadow-soft-card",
    default: "h-12 bg-white border-gray-200 shadow-input-shadow",
  };

  return (
    <div className={`${className || ""} w-full`}>
      <label className="block text-auth-label">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative mt-3">
        {icon && (
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
            {icon}
          </div>
        )}
        <input
          className={`input input-bordered w-full py-2 ${
            icon ? "pl-12" : "px-4"
          } ${variants[variant]} ${error ? "border-error" : ""}`}
          type={type}
          {...register}
          required={required}
          placeholder={placeholder}
        />
      </div>
      {error && <p className="text-error text-sm">{error}</p>}
    </div>
  );
};

export default FormInput;
