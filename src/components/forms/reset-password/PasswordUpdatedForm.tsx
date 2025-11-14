"use client";

import BaseButton from "@/components/buttons/BaseButton";
import React from "react";
import { useRouter } from "next/navigation";
import FlexContainer from "@/components/FlexContainer";
import TitleContainer from "@/components/TitleContainer";

const PasswordUpdatedForm = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center w-full mt-[150px] lg:mt-0">
      <div className="w-full md:w-[700px]">
        <TitleContainer
          className="text-black mb-4 text-center"
          title="Password Updated!"
        />
        <span className="text-[#777777] text-center block subtitle">
          Congratulations! Your password has been successfully reset.
        </span>

        <FlexContainer className="mx-auto xs:w-full md:w-3/4 lg:w-2/3 my-8">
          <BaseButton
            className="bg-blue-cream hover:bg-blue-cream hover:scale-105 text-white text-[20px] font-medium w-full min-h-0 mt-6 mb-8 rounded-md h-[60px]"
            type="button"
            onClick={() => router.push("/auth/login")}
          >
            Back to Login
          </BaseButton>
        </FlexContainer>
      </div>
    </div>
  );
};

export default PasswordUpdatedForm;
