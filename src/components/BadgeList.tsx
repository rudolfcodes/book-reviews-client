import React from "react";
import FlexContainer from "./FlexContainer";
import ClockIcon from "./icons/Clock";
import Badge from "./Badge";
import { formatDateTime } from "@/utils/dates";

interface BadgeListProps {
  badges: string[];
}

const BadgeList = ({ badges }: BadgeListProps) => {
  const constructBadgeObjects = (badges: string[]) => {
    return badges.map((badge) => {
      const isDate =
        /\d/.test(badge) && (badge.includes("/") || badge.includes("-"));
      return {
        type: isDate ? "date" : "default",
        value: isDate ? formatDateTime(badge) : badge,
      };
    });
  };

  return (
    <FlexContainer className="text-gray-600 text-xs gap-4 flex-wrap">
      {constructBadgeObjects(badges).map((badge, index) => (
        <Badge
          key={`${index}-badge`}
          variant={badge.type === "date" ? "success" : "default"}
          icon={badge.type === "date" ? <ClockIcon /> : null}
          className="flex gap-2"
        >
          <span>{badge.value}</span>
        </Badge>
      ))}
    </FlexContainer>
  );
};

export default BadgeList;
