import React from "react";

interface DropdownMenuProps {
  data: Array<{ id: string; name: string }>;
  handleChange: (item: { id: string; name: string }) => void;
  ariaLabel?: string;
  ariaOrientation?: "vertical" | "horizontal";
  position?: "top-left" | "bottom-right" | "bottom-left" | "top-right";
  id?: string;
  className?: string;
  hasImage?: boolean;
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
}: DropdownMenuProps) => {
  return <div>DropdownMenu</div>;
};

export default DropdownMenu;
