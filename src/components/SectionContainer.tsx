import React, { ReactNode } from "react";

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
}

const SectionContainer = ({ children, className }: SectionContainerProps) => {
  return (
    <section className={`bg-white py-14 ${className}`}>
      <div className="mx-auto">{children}</div>
    </section>
  );
};

export default SectionContainer;
