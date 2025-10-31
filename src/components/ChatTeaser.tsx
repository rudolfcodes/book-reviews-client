"use client";

import React from "react";
import InnerWrapper from "./InnerWrapper";
import TitleContainer from "./TitleContainer";
import TextContainer from "./TextContainer";
import BaseButton from "./buttons/BaseButton";
import LinkIcon from "./icons/LinkIcon";
import { useRouter } from "next/navigation";
import FlexContainer from "./FlexContainer";
import NextImage from "./Image";

const ChatTeaser = () => {
  const router = useRouter();

  return (
    <InnerWrapper>
      <FlexContainer className="py-section-lg">
        <FlexContainer className="flex-col justify-center gap-6">
          <TitleContainer
            title="Plan together, without messy group texts"
            className="banner-title"
          />
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
          className="chat-preview -mb-32"
          width={720}
          height={400}
        />
      </FlexContainer>
    </InnerWrapper>
  );
};

export default ChatTeaser;
