"use client";

import RegisterForm from "@/components/forms/RegisterForm";
import AuthLayout from "../layout";

const RegisterPage = () => {
  const illustration = {
    src: "../../public/register-illustration.png",
    alt: "Join Us",
    title: "Discover Switzerland, One Page at a Time",
  };

  return (
    <AuthLayout illustration={illustration}>
      <RegisterForm />
    </AuthLayout>
  );
};

export default RegisterPage;
