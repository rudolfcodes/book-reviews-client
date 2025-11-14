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
}

const FormInput = ({
  label,
  type,
  register,
  error,
  required,
  className,
  placeholder,
}: FormInputProps) => {
  return (
    <div className={className}>
      <label className="block text-auth-label">
        {label} {required && <span className="text-red-500">*</span>}
        <input
          className="input input-bordered w-full h-[60px] rounded-md border-2 border-blue-cream mt-3 shadow-dark-input"
          type={type}
          {...register}
          required={required}
          placeholder={placeholder}
        />
      </label>
      {error && <p className="text-error text-sm">{error}</p>}
    </div>
  );
};

export default FormInput;
