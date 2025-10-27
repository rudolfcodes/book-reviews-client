"use client";

import React from "react";
import FlexContainer from "./FlexContainer";
import BaseButton from "./buttons/BaseButton";
import { useRouter } from "next/navigation";
import InnerWrapper from "./InnerWrapper";

type CTAType = {
  buttonText: string;
  href: string;
};

interface CTABannerProps {
  title: string;
  cta: CTAType;
  subtitle?: string;
  icon?: React.ReactNode;
  className?: string;
}

const CTABanner = ({
  title,
  subtitle,
  cta,
  icon,
  className,
}: CTABannerProps) => {
  const router = useRouter();

  return (
    <FlexContainer
      className={`${
        className || ""
      } gap-4 text-center flex-col py-12 bg-[#F9FAFB]`}
    >
      <InnerWrapper className="flex flex-col gap-5">
        {icon && <div>{icon}</div>}
        <h2 className="text-label">{title}</h2>
        {subtitle && <h3>{subtitle}</h3>}
        <BaseButton type="button" onClick={() => router.push(cta.href)}>
          {cta.buttonText}
        </BaseButton>
      </InnerWrapper>
    </FlexContainer>
  );
};

export default CTABanner;
