import React from "react";

interface BaseButtonProps {
  type: "button" | "submit" | "reset";
  onClick?: () => void;
  id?: string;
  ariaLabel?: string;
  ariaHasPopup?: boolean;
  ariaExpanded?: boolean;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
}

const BaseButton = ({
  id,
  ariaLabel,
  ariaHasPopup,
  ariaExpanded,
  type,
  onClick,
  disabled,
  className,
  children,
}: BaseButtonProps) => {
  return (
    <button
      id={id}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`btn ${className}`}
      aria-label={ariaLabel}
      aria-haspopup={ariaHasPopup}
      aria-expanded={ariaExpanded}
    >
      {children}
    </button>
  );
};

export default BaseButton;
