import React from "react";

interface BaseButtonProps {
  type: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
}

const BaseButton = ({
  type,
  onClick,
  disabled,
  className,
  children,
}: BaseButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`btn ${className}`}
    >
      {children}
    </button>
  );
};

export default BaseButton;
