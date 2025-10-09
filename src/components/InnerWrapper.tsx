"use client";

import React from "react";

interface InnerWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const InnerWrapper = ({ children, className }: InnerWrapperProps) => {
  return (
    <div
      className={`flex w-full justify-between items-center mx-auto max-w-7xl px-4 ${className}`}
    >
      {children}
    </div>
  );
};

export default InnerWrapper;
