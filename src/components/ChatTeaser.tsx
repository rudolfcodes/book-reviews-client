"use client";

import React from "react";
import InnerWrapper from "./InnerWrapper";
import TextContainer from "./TextContainer";
import BaseButton from "./buttons/BaseButton";
import LinkIcon from "./icons/LinkIcon";
import { useRouter } from "next/navigation";
import FlexContainer from "./FlexContainer";
import NextImage from "./Image";

const ChatTeaser = () => {
  const router = useRouter();

  return (
    <InnerWrapper className="px-10 lg:!px-10 xl:px-4">
      <FlexContainer className="py-10 lg:py-section-lg relative w-full h-[400px] lg:h-[600px] xl:h-[790px] lg:flex-row flex-col items-center">
        <FlexContainer className="w-full justify-center items-center text-center relative md:text-left md:absolute flex-col gap-6 md:inset-y-0 md:left-0 md:right-1/4 lg:items-start">
          <h2 className="text-banner-title lg:text-big-title xl:text-section-title-xl w-3/4 xl:w-[720px]">
            Plan together, without messy group texts
          </h2>
          <TextContainer
            text="Message hosts for logistics, coordinate with attendees, and get reminders only when plans change."
            className="subtitle lg:max-w-[720px]"
          />
          <BaseButton
            type="button"
            className="bg-error text-white rounded-xl hover:scale-105 hover:bg-error transition-all duration-200 border-none max-w-64 !p-5 h-14"
            onClick={() => router.push("/chat")}
          >
            Open Demo Chat
            <LinkIcon />
          </BaseButton>
        </FlexContainer>

        <NextImage
          src="/images/chat-teaser.png"
          alt="Chat Preview"
          className="hidden lg:block absolute lg:w-1/2 xl:w-fit right-0 bottom-0 items-center z-10 chat-preview"
          width={720}
          height={400}
        />
      </FlexContainer>
    </InnerWrapper>
  );
};

export default ChatTeaser;
