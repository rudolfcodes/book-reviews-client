import { useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface FileInputProps {
  label: string;
  register: UseFormRegisterReturn;
  placeholder?: string;
  icon?: React.ReactNode;
  accept?: string;
  maxSize?: number;
  multiple?: boolean;
  error?: string;
  className?: string;
  required?: boolean;
}

const FileInput = ({
  label,
  register,
  placeholder,
  icon,
  accept,
  maxSize,
  multiple,
  error,
  className,
  required,
}: FileInputProps) => {
  const [selectedFileName, setSelectedFileName] = useState<string>("");

  return (
    <div className={`${className || ""} w-full`}>
      <label>{label}</label>
      <div className="relative mt-3">
        <input
          type="file"
          className="absolute inset-0 opacity-0 cursor-pointer"
          {...register}
          accept={accept}
          multiple={multiple}
          required={required}
          onChange={(e) => {
            register.onChange(e);
            const files = e.target.files;
            if (files && files.length > 0) {
              if (maxSize) {
                for (let i = 0; i < files.length; i++) {
                  if (files[i].size > maxSize) {
                    setSelectedFileName("");
                    return;
                  }
                }
              }
              const names = Array.from(files)
                .map((file) => file.name)
                .join(", ");
              setSelectedFileName(names);
            } else {
              setSelectedFileName("");
            }
          }}
        />
        <div
          className={`flex items-center gap-5 input input-bordered w-full py-2 h-12 bg-white border-gray-200 shadow-input-shadow ${
            icon ? "pl-2" : "px-4"
          } ${error ? "border-error" : ""}
          }`}
        >
          {icon && <div>{icon}</div>}
          <span className={icon ? "flex-1" : ""}>
            {selectedFileName || placeholder || "Choose a file"}
          </span>
        </div>
      </div>
      {error && <p className="text-error text-sm">{error}</p>}
    </div>
  );
};

export default FileInput;
