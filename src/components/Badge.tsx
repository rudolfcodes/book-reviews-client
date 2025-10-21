import React, { isValidElement } from "react";

interface BadgeProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  variant?: "default" | "success" | "warning" | "error";
}

const mapVariantToClasses = {
  default: "bg-gray-200 opacity-20 text-gray-800",
  success: "bg-badge-green opacity-20 text-badge-text",
  warning: "bg-yellow-300 opacity-20 text-yellow-900",
  error: "bg-error opacity-20 text-red-900",
};

const Badge = ({
  children,
  className,
  icon,
  variant = "default",
}: BadgeProps) => {
  return isValidElement(children) && !children.props.children ? null : (
    <div
      className={`text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded ${className} ${mapVariantToClasses[variant]}`}
    >
      {children}
      {icon && <span className="mr-1">{icon}</span>}
    </div>
  );
};

export default Badge;
