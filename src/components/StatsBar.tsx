import React from "react";
import FlexContainer from "./FlexContainer";

interface StatItem {
  icon: string;
  value: string;
}

interface StatBarProps {
  stats: StatItem[];
  className?: string;
}

const StatsBar = ({ stats, className }: StatBarProps) => {
  return (
    <FlexContainer className={`items-center ${className}`}>
      {stats.map((stat) => (
        <div key={stat.icon} className="flex gap-2.5 items-center">
          <span className="mr-2">{stat.icon}</span>
          <span>{stat.value}</span>
        </div>
      ))}
    </FlexContainer>
  );
};

export default StatsBar;
