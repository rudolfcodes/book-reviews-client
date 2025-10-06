"use client";

import BaseButton from "@/components/buttons/BaseButton";
import React from "react";
import { useRouter } from "next/navigation";

const PasswordUpdatedForm = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center w-full mt-[150px] lg:mt-0">
      <div className="w-full md:w-[700px]">
        <h1 className="text-black mb-4 text-center">Password Updated!</h1>
        <span className="text-[#777777] text-center block subtitle">
          Congratulations! Your password has been successfully reset.
        </span>

        <BaseButton type="button" onClick={() => router.push("/auth/login")}>
          Back to Login
        </BaseButton>
      </div>
    </div>
  );
};

export default PasswordUpdatedForm;
