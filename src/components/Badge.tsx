import React, { isValidElement } from "react";

interface BadgeProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  variant?: "default" | "success" | "warning" | "error" | "circular";
}

const mapVariantToClasses = {
  default: "bg-badge-default primary-grey",
  success: "bg-badge-green bg-opacity-20 text-badge-text",
  warning: "bg-yellow-300 opacity-20 text-yellow-900",
  error: "bg-error opacity-20 text-red-900",
  circular: "bg-badge-default rounded-full",
};

const Badge = ({
  children,
  className,
  icon,
  variant = "default",
}: BadgeProps) => {
  return isValidElement(children) && !children.props.children ? null : (
    <div
      className={`text-xs font-medium px-5 py-2 rounded-2xl ${
        className || ""
      } ${mapVariantToClasses[variant]}`}
    >
      {children}
      {icon && <span>{icon}</span>}
    </div>
  );
};

export default Badge;
