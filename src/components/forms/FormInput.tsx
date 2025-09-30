import React from "react";

interface FormInputProps {
  label: string;
  type: string;
  register: any; // This will use the register function from react-hook-form
  error?: string;
  required?: boolean;
  className?: string;
}

const FormInput = ({
  label,
  type,
  register,
  error,
  required,
  className,
}: FormInputProps) => {
  return (
    <div className={`${className} mb-6`}>
      <label className="block text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
        <input
          className="input input-bordered w-full h-8 rounded-3xl border-gray-500"
          type={type}
          {...register}
          required={required}
        />
      </label>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default FormInput;
