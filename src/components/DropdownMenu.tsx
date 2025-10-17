import React from "react";
import { DropdownItem } from "./SelectDropdown";

interface DropdownMenuProps {
  data: Array<DropdownItem>;
  handleChange: (item: DropdownItem) => void;
  ariaLabel?: string;
  ariaOrientation?: "vertical" | "horizontal";
  position?: "top-left" | "bottom-right" | "bottom-left" | "top-right";
  id?: string;
  className?: string;
  hasImage?: boolean;
  selectedId?: string;
}

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
      role="menu"
      className={className}
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
              <img
                src={item.imageUrl}
                alt="image"
                loading="lazy"
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
