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
      <InnerWrapper className="flex flex-col gap-5 !md:max-w-sm lg:max-w-[450px]">
        {icon && <div>{icon}</div>}
        <h2 className="text-label text-banner-title">{title}</h2>
        {subtitle && <h3>{subtitle}</h3>}
        <BaseButton
          className="bg-error hover:bg-error/80 hover:scale-110 transition-all duration-200 text-white font-semiBold rounded-xl px-14 py-2 hover:border-none"
          type="button"
          onClick={() => router.push(cta.href)}
        >
          {cta.buttonText}
        </BaseButton>
      </InnerWrapper>
    </FlexContainer>
  );
};

export default CTABanner;
