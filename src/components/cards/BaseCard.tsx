import React from "react";
import FlexContainer from "../FlexContainer";

interface BaseCardProps {
  children: React.ReactNode;
  className?: string;
}

const BaseCard = ({ children, className }: BaseCardProps) => {
  return (
    <FlexContainer
      className={`flex-col border border-border-grey bg-white rounded-xl p-5 ${
        className || ""
      }`}
    >
      {children}
    </FlexContainer>
  );
};

export default BaseCard;
