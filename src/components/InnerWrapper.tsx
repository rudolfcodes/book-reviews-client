"use client";

import React from "react";
import FlexContainer from "./FlexContainer";

interface InnerWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const InnerWrapper = ({ children, className }: InnerWrapperProps) => {
  return (
    <FlexContainer
      className={`justify-between w-full items-center mx-auto lg:max-w-7xl lg:px-4 ${
        className || ""
      }`}
    >
      {children}
    </FlexContainer>
  );
};

export default InnerWrapper;
