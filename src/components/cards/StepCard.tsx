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
    <BaseCard className="relative p-7 font-inter flex">
      <div className="absolute top-0 left-0 p-2 bg-primary-grey border-secondary-grey border-b border-r rounded-full">
        <span className="text-white font-bold">{stepNumber}</span>
      </div>
      <div className="bg-red-500 h-1 w-3/4 rounded-t-xl" />

      <FlexContainer className="flex-col gap-2 mb-3">
        {icon}
        <h3 className="text-card-title font-medium mb-2">{title}</h3>
      </FlexContainer>

      <TextContainer
        className="text-sm text-tertiary-grey"
        text={description}
      />

      <Link href={actionLink} className="text-tertiary-grey mt-auto">
        {actionText} →
      </Link>
    </BaseCard>
  );
};

export default StepCard;
