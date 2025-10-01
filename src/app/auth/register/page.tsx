"use client";

import RegisterForm from "@/components/forms/RegisterForm";
import AuthPageWrapper from "@/components/auth/AuthPageWrapper";

const RegisterPage = () => {
  const illustration = {
    src: "/images/register-illustration.png",
    alt: "Join our community",
    title: "Discover Switzerland, One Page at a Time",
  };

  return (
    <AuthPageWrapper illustration={illustration}>
      <RegisterForm />
    </AuthPageWrapper>
  );
};

export default RegisterPage;
