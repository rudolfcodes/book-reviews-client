import AuthPageWrapper from "@/components/auth/AuthPageWrapper";
import PasswordUpdatedForm from "@/components/forms/reset-password/PasswordUpdatedForm";
import React from "react";

const PasswordUpdatedPage = () => {
  const illustration = {
    src: "/images/password-updated.png",
    alt: "Password updated successfully",
    title: "Discover Switzerland, One Page at a Time",
  };

  return (
    <AuthPageWrapper illustration={illustration}>
      <PasswordUpdatedForm />
    </AuthPageWrapper>
  );
};

export default PasswordUpdatedPage;
