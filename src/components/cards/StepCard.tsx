import React from "react";
import BaseCard from "./BaseCard";
import TextContainer from "../TextContainer";
import Link from "next/link";
import FlexContainer from "../FlexContainer";
import { StepType } from "@/types/step/step.types";

const StepCard = ({
  stepNumber,
  icon,
  title,
  description,
  actionText,
  actionLink,
}: StepType) => {
  return (
    <BaseCard className="relative p-7 font-inter flex lg:max-w-[244px] h-[222px]">
      <div className="absolute -top-3 -left-3 p-2 py-0 bg-[#CCCCCC] border-secondary-grey border-b border-r rounded-full z-10">
        <span className="text-white font-bold">{stepNumber}</span>
      </div>
      <div className="bg-error absolute top-0 left-0 h-[1px] w-[97%]" />

      <FlexContainer className="flex-col gap-2 mb-3">
        {icon}
        <h3 className="text-card-title font-medium mb-2">{title}</h3>
      </FlexContainer>

      <TextContainer
        className="text-sm text-tertiary-grey"
        text={description}
      />

      <Link
        href={actionLink}
        className="text-tertiary-grey mt-auto text-xs text-right"
      >
        {actionText} →
      </Link>
    </BaseCard>
  );
};

export default StepCard;
