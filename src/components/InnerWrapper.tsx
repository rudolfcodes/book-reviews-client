"use client";

import React from "react";

interface InnerWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const InnerWrapper = ({ children, className }: InnerWrapperProps) => {
  return (
    <div
      className={`flex justify-between w-full items-center mx-auto lg:max-w-7xl lg:px-4 ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
};

export default InnerWrapper;
