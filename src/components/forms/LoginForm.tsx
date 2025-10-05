"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ILoginFormInput } from "@/types/forms";
import axiosInstance from "@/utils/axios";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FormInput from "./FormInput";
import Link from "next/link";
import BaseButton from "../buttons/BaseButton";
import FlexContainer from "../FlexContainer";
import TextContainer from "../TextContainer";
import CheckInput from "./CheckInput";

const schema: yup.ObjectSchema<any> = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormInput>({
    resolver: yupResolver(schema),
  });

  const [apiError, setApiError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter();
  const TIMEOUT = 3000;

  const onSubmit = async (data: ILoginFormInput) => {
    try {
      const response = await axiosInstance.post("/api/users/login", {
        email: data.email,
        password: data.password,
        rememberMe: rememberMe,
      });

      localStorage.setItem("userId", response.data.userId);
      localStorage.setItem("rememberMe", rememberMe ? "true" : "false");

      if (response.data) {
        toast.success(
          "The verification email has been sent! Redirecting to verification...",
          {
            position: "top-center",
            autoClose: TIMEOUT,
          }
        );

        setTimeout(() => {
          router.push("/auth/verify-otp");
        }, TIMEOUT);
      }
    } catch (error: any) {
      if (error?.response?.data) {
        setApiError(error.response.data.error || "Login failed");
      } else {
        setApiError("Sorry, an unexpected error occurred.");
      }
      console.error(
        "Login failed: ",
        error.response?.data?.error || error.message
      );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full mt-[150px] lg:mt-0">
      <div className="w-full md:w-[700px]">
        <h1 className="text-black mb-4 text-center">Welcome Back</h1>
        <span className="text-[#777777] text-center block subtitle">
          Enter your login details below
        </span>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded px-8 mx-auto xs:w-full md:w-3/4 lg:w-2/3 mt-8"
        >
          {apiError && (
            <p className="text-error text-center mb-4 text-base">{apiError}</p>
          )}
          <FormInput
            className="mb-6"
            label="Email"
            type="email"
            register={register("email")}
            placeholder="Enter your email address"
            error={errors.email?.message}
            required
          />
          <FormInput
            className="mb-4"
            label="Password"
            type="password"
            register={register("password")}
            placeholder="Enter your password"
            error={errors.password?.message}
            required
          />

          <FlexContainer className="justify-between mb-4 items-center">
            <FlexContainer className="items-center">
              <CheckInput
                className="text-[16px]"
                id="rememberMe"
                label="Remember me"
                checked={rememberMe}
                onChange={setRememberMe}
              />
            </FlexContainer>

            <Link
              href="/auth/forgot-password"
              className=" text-blue-cream text-right bold-700"
            >
              Forgot Password?
            </Link>
          </FlexContainer>

          <BaseButton
            type="submit"
            className="bg-blue-cream hover:bg-blue-cream hover:scale-105 text-white text-[20px] font-medium w-full min-h-0 mt-6 mb-8 rounded-md h-[60px]"
          >
            Log In
          </BaseButton>

          <FlexContainer className="justify-center gap-2">
            <TextContainer text="Don't have an account?" className="text-sm" />
            <Link href="/auth/register" className="text-sm text-blue-cream">
              Sign up
            </Link>
          </FlexContainer>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
