"use client";

import VerifyForm from "@/components/forms/VerifyForm";
import Logo from "@/components/Logo";
import React from "react";

type Props = {};
// if the verification code is correct, set the token and decoded user with jwtDecode.
// Set user, refresh router, show success toast, and push to main page after timeout.

const VerifyOtp = (props: Props) => {
  return (
    <div className="auth-page min-h-screen mx-5 flex items-center justify-center w-full">
      <Logo imageSrc="/images/logo.png" alt="Logo" />
      <div className="auth-left">
        <VerifyForm />
      </div>

      <div className="auth-right">
        <h2 className="text-white mb-11 text-3xl font-bold">
          Discover Switzerland, One Page at a Time
        </h2>
        <img src="/verify-otp.png" alt="Discover Switzerland" />
      </div>
    </div>
  );
};

export default VerifyOtp;
