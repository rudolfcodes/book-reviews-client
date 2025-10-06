"use client";

import React from "react";
import LoginForm from "@/components/forms/LoginForm";
import AuthPageWrapper from "@/components/auth/AuthPageWrapper";

const SignIn = () => {
  const illustration = {
    src: "/images/login-illustration.png",
    alt: "Welcome back",
    title: "Discover Switzerland, One Page at a Time",
  };

  return (
    <AuthPageWrapper illustration={illustration}>
      <LoginForm />
    </AuthPageWrapper>
  );
};

export default SignIn;
