"use client";

import AuthPageWrapper from "@/components/auth/AuthPageWrapper";
import ResetPasswordForm from "@/components/forms/reset-password/ResetPasswordForm";

const ResetPassword = () => {
  const illustration = {
    src: "/images/reset-password.png",
    alt: "Reset your password",
    title: "Discover Switzerland, One Page at a Time",
  };

  return (
    <AuthPageWrapper illustration={illustration}>
      <ResetPasswordForm />
    </AuthPageWrapper>
  );
};

export default ResetPassword;
