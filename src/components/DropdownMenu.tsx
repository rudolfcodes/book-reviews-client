import React from "react";
import { DropdownItem } from "./SelectDropdown";
import NextImage from "./Image";

interface DropdownMenuProps {
  data: Array<DropdownItem>;
  handleChange: (item: DropdownItem) => void;
  ariaLabel?: string;
  ariaOrientation?: "vertical" | "horizontal";
  position?:
    | "top-left"
    | "bottom-right"
    | "bottom-left"
    | "top-right"
    | "top-full-left-0";
  id?: string;
  className?: string;
  hasImage?: boolean;
  selectedId?: string;
}

const positionClasses: { [key: string]: string } = {
  "top-left": "top-0 left-0",
  "bottom-right": "bottom-0 right-0",
  "bottom-left": "bottom-0 left-0",
  "top-right": "top-0 right-0",
  "top-full-left-0": "top-full left-0",
};

const DropdownMenu = ({
  data,
  handleChange,
  ariaLabel,
  ariaOrientation,
  position,
  id,
  className,
  hasImage,
  selectedId,
}: DropdownMenuProps) => {
  return (
    <div
      aria-label={ariaLabel}
      aria-orientation={ariaOrientation}
      id={id}
      className={`absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded shadow-lg ${
        positionClasses[position || "bottom-left"]
      } ${className}`}
    >
      <ul
        role="menu"
        aria-labelledby={id}
        aria-orientation={ariaOrientation}
        className="leading-10"
      >
        {data.map((item) => (
          <li
            key={item.id}
            className={`flex items-center cursor-pointer hover:bg-gray-200 px-3 ${
              selectedId === item.id ? "bg-gray-200" : ""
            }`}
            onClick={() => handleChange(item)}
          >
            {hasImage && (
              <NextImage
                src={item.imageUrl || "/images/default-avatar.png"}
                alt="image"
                loading="lazy"
                width={32}
                height={32}
                className="w-8 h-8 rounded-full bg-gray-400 object-cover me-2"
              />
            )}
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownMenu;
