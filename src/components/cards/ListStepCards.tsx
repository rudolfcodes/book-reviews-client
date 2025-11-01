import React from "react";
import { ListStepCardsProps } from "@/types/step/step.types";
import StepCard from "./StepCard";

const ListStepCards = ({ steps, className }: ListStepCardsProps) => {
  return (
    <div className={className}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {steps.map((step) => (
          <StepCard key={step.stepNumber} {...step} />
        ))}
      </div>
    </div>
  );
};

export default ListStepCards;
