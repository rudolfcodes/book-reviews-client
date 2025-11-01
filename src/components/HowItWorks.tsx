import React from "react";
import InnerWrapper from "./InnerWrapper";
import FlexContainer from "./FlexContainer";
import ListStepCards from "./cards/ListStepCards";
import { steps } from "@/data/steps";

const HowItWorks = () => {
  return (
    <FlexContainer className="bg-off-white pt-16 pb-20">
      <InnerWrapper className="flex-col gap-[72px]">
        <h2 className="text-banner-title text-center">
          Get started with{" "}
          <span className="text-error text-banner-title">SWISS Bookclub</span>
        </h2>

        <ListStepCards steps={steps} />
      </InnerWrapper>
    </FlexContainer>
  );
};

export default HowItWorks;
