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
    <FlexContainer
      className={`items-center gap-2.5 text-sm text-stats ${className}`}
    >
      {stats.map((stat) => (
        <div key={stat.icon} className="flex gap-2.5 items-center">
          <img src={stat.icon} alt="" className="w-3.5 h-3.5" />
          <span>{stat.value}</span>
        </div>
      ))}
    </FlexContainer>
  );
};

export default StatsBar;
