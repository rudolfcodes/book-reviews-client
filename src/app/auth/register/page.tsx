"use client";

import RegisterForm from "@/components/forms/RegisterForm";
import AuthPageWrapper from "@/components/auth/AuthPageWrapper";

const RegisterPage = () => {
  const illustration = {
    src: "/illustrations/register-illustration.png",
    alt: "Join our community",
    title: "Discover Switzerland, One Page at a Time",
    subtitle: "Join our community of book lovers across Switzerland",
  };

  return (
    <AuthPageWrapper illustration={illustration}>
      <RegisterForm />
    </AuthPageWrapper>
  );
};

export default RegisterPage;
