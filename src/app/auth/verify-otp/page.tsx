"use client";

import AuthPageWrapper from "@/components/auth/AuthPageWrapper";
import VerifyForm from "@/components/forms/VerifyForm";
import React from "react";

const illustration = {
  src: "/images/verify-otp.png",
  alt: "Verify your account",
  title: "Discover Switzerland, One Page at a Time",
};

const VerifyOtp = () => {
  return (
    <AuthPageWrapper illustration={illustration}>
      <VerifyForm />
    </AuthPageWrapper>
  );
};

export default VerifyOtp;
