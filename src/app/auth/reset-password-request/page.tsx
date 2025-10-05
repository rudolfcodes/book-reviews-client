"use client";

import AuthPageWrapper from "@/components/auth/AuthPageWrapper";
import EmailInputForm from "@/components/forms/reset-password/EmailInputForm";

const ResetPasswordRequestPage = () => {
  const illustration = {
    src: "/images/reset-password-request.png",
    alt: "Reset your password",
    title: "Discover Switzerland, One Page at a Time",
  };

  return (
    <AuthPageWrapper illustration={illustration}>
      <EmailInputForm />
    </AuthPageWrapper>
  );
};

export default ResetPasswordRequestPage;
