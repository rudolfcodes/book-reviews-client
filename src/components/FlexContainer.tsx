import React from "react";

interface FlexContainerProps {
  children: React.ReactNode;
  className?: string;
}

const FlexContainer = ({ children, className }: FlexContainerProps) => {
  return <div className={`flex ${className}`}>{children}</div>;
};

export default FlexContainer;
