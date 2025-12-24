import React from "react";

interface FlexContainerProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const FlexContainer = ({ children, className, style }: FlexContainerProps) => {
  return (
    <div className={`flex ${className || ""}`} style={style}>
      {children}
    </div>
  );
};

export default FlexContainer;
