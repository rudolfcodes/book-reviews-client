"use client";

import axiosInstance from "@/utils/axios";
import React, { useState, FormEvent } from "react";
import OtpInput from "./OtpInput";
import BaseButton from "../buttons/BaseButton";
import FlexContainer from "../FlexContainer";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import useUser from "@/hooks/useUser";
import TitleContainer from "../TitleContainer";
import { AxiosError } from "axios";

interface VerifyOTPRequest {
  userId: string | null;
  otp: string;
  rememberMe: boolean;
}

// if the verification code is correct, set the token and decoded user with jwtDecode.
// Set user, refresh router, show success toast, and push to main page after timeout.
const verifyOtp = async (data: VerifyOTPRequest) => {
  try {
    const response = await axiosInstance.post("/api/users/verify-otp", data);
    return response.data;
  } catch (error: unknown) {
    if (error instanceof AxiosError && error.response) {
      console.error("Error verifying OTP:", error.response.data);
      return {
        success: false,
        message: error.response?.data?.error || "Verification failed",
      };
    }
  }
};

const VerifyForm = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [apiError, setApiError] = useState("");
  const { refreshUser } = useUser();
  const router = useRouter();

  const handleResendCode = async () => {
    try {
      const response = await axiosInstance.post("/api/users/resend-otp", {
        userId: localStorage.getItem("userId"),
      });
      if (response.data.success) {
        toast.success("Verification code resent!", {
          position: "top-center",
          autoClose: 2000,
        });
      }
    } catch (error) {
      console.error("Error resending OTP:", error);
      setApiError("Failed to resend code. Please try again.");
      toast.error("Failed to resend code. Please try again.", {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const result = await verifyOtp({
      userId: localStorage.getItem("userId"),
      otp: otp.join(""),
      rememberMe: localStorage.getItem("rememberMe") === "true",
    });
    if (result.user && result.token) {
      localStorage.setItem("token", result.token);
      localStorage.setItem("user", JSON.stringify(result.user));

      // clear temporary data
      localStorage.removeItem("userId");
      localStorage.removeItem("rememberMe");
      toast.success("OTP verified successfully! Redirecting...", {
        position: "top-center",
        autoClose: 2000,
      });

      refreshUser();
      setTimeout(() => {
        router.push("/");
      }, 2000);
    } else {
      console.error(
        "OTP verification failed:",
        result.message || "Invalid OTP"
      );
      setApiError(
        result.message || "Invalid verification code. Please try again."
      );
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
      <div className="w-full xs:pt-[35px] sm:pt-[85px] lg:pt-0 md:w-[700px] max-w-md">
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <TitleContainer
            className="text-black mb-3 text-center"
            title="Enter Verification Code"
          />
          <span className="text-[#777777] text-center block subtitle max-w-64">
            Enter the 4-digit code we've sent to your email
          </span>

          {apiError && (
            <p className="text-error text-center mt-3 mb-4 text-base">
              {apiError}
            </p>
          )}

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
                onClick={handleResendCode}
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
          <ToastContainer />
        </form>
      </div>
    </div>
  );
};

export default VerifyForm;
