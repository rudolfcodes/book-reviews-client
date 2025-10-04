"use client";

import axiosInstance from "@/utils/axios";
import React from "react";
import OtpInput from "./OtpInput";
import BaseButton from "../buttons/BaseButton";
import FlexContainer from "../FlexContainer";

// if the verification code is correct, set the token and decoded user with jwtDecode.
// Set user, refresh router, show success toast, and push to main page after timeout.
const verifyOtp = async (data: { otp: string }) => {
  try {
    const response = await axiosInstance.post("/api/users/verify-otp", data);
    return response.data;
  } catch (error) {
    console.error("Error verifying OTP:", error);
    return { success: false, message: "Error verifying OTP" };
  }
};

const VerifyForm = () => {
  const [otp, setOtp] = React.useState(["", "", "", ""]);
  // upon submit, verify the OTP code
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    // handle OTP verification logic here
    const formData = new FormData(event.currentTarget as HTMLFormElement);
    const otp = Array.from(formData.values()).join("");
    console.log("Submitted OTP:", otp);
    const result = await verifyOtp({ otp });
    if (result.success) {
      console.log("OTP verified successfully");
      // Redirect to main page or show success message
    } else {
      console.error("OTP verification failed:", result.message);
    }
  };

  const handlePaste = (pastedValue: string) => {
    const sanitizedValue = pastedValue.replace(/\D/g, "").slice(0, 4);
    const newOtp = sanitizedValue.split("");
    while (newOtp.length < 4) {
      newOtp.push("");
    }
    setOtp(newOtp);
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value !== "" && (value < "0" || value > "9" || value.length > 1))
      return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  return (
    <div className="flex flex-col w-full py-8">
      <div className="w-full md:w-[700px] max-w-md">
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <h1 className="text-black mb-3 text-center">
            Enter Verification Code
          </h1>
          <span className="text-[#777777] text-center block subtitle max-w-64">
            Enter the 4-digit code we've sent to your email
          </span>
          <div className="flex flex-col mt-4">
            <div className="flex justify-evenly gap-4">
              {otp.map((singleOtpValue, index) => (
                <OtpInput
                  key={index}
                  value={singleOtpValue}
                  onChange={(value) => handleOtpChange(index, value)}
                  onPaste={handlePaste}
                  className="otp-input"
                />
              ))}
            </div>

            <FlexContainer className="flex-col mt-5">
              <BaseButton
                type="button"
                className="bold-700 mb-4 text-xl bg-transparent text-blue-cream focus:outline-none focus:ring-0 border-0 outline-none ring-0 hover:bg-transparent hover:border-0"
              >
                Resend
              </BaseButton>
              <BaseButton
                type="submit"
                className="bold-700 text-xl bg-blue-cream text-white hover:bg-blue-cream hover:scale-105"
              >
                Verify
              </BaseButton>
            </FlexContainer>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VerifyForm;
