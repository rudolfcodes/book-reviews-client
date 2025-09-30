import axiosInstance from "@/utils/axios";
import React from "react";

interface VerifyFormProps {}

const verifyOtp = async (data: { otp: string }) => {
  try {
    const response = await axiosInstance.post("/api/users/verify-otp", data);
    return response.data;
  } catch (error) {
    console.error("Error verifying OTP:", error);
    return { success: false, message: "Error verifying OTP" };
  }
};

const VerifyForm = async ({}: VerifyFormProps) => {
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
      // Show error message to user
    }
  };
  return (
    <form onSubmit={handleSubmit} className="verify-form">
      <div className="flex flex-col">
        <h1>Enter Verification Code</h1>
        <span>Enter the 4-digit code we've sent to your email</span>

        <div className="verification-inputs">
          <input type="text" maxLength={1} />
          <input type="text" maxLength={1} />
          <input type="text" maxLength={1} />
          <input type="text" maxLength={1} />
        </div>

        <div className="form-actions">
          <button className="resend-btn">Resend</button>
          <button className="confirm-btn">Confirm</button>
        </div>
      </div>
    </form>
  );
};

export default VerifyForm;
