"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from "@/utils/axios";
import Link from "next/link";
import FormInput from "./FormInput";
import BaseButton from "../buttons/BaseButton";
import TextContainer from "../TextContainer";
import FlexContainer from "../FlexContainer";
import { IRegisterFormInput } from "@/types/forms";

type RegisterFormSchemaType = Omit<IRegisterFormInput, "onSubmit">;

const schema: yup.ObjectSchema<RegisterFormSchemaType> = yup.object({
  username: yup.string().required("Username is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long"),
  confirmPassword: yup.string().required("Confirm Password is required"),
});

const TIMEOUT = 3500;

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterFormInput>({
    resolver: yupResolver(schema),
  });
  const [apiError, setApiError] = useState("");
  const router = useRouter();

  const onSubmit = async (data: IRegisterFormInput) => {
    try {
      await axiosInstance.post("/api/users/register", {
        username: data.username,
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
      });

      toast.success(
        "Registration successful! Redirecting to the login page...",
        {
          position: "top-center",
          autoClose: 3000,
        }
      );

      setTimeout(() => {
        router.push("/auth/login");
      }, TIMEOUT);
    } catch (error: any) {
      if (error?.response?.data) {
        setApiError(error.response.data.error);
      } else {
        setApiError("Sorry, an unexpected error ocurred.");
      }
      console.error(
        "Registration failed: ",
        error.response?.data?.message || error.message
      );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full mt-[150px] lg:mt-0">
      <div className="w-full md:w-[700px]">
        <h1 className="text-black mb-4 text-center">Join the club now</h1>
        <span className="text-[#777777] text-center block subtitle">
          Create your account
        </span>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded px-8 mx-auto xs:w-full md:w-3/4 lg:w-2/3 mt-8"
        >
          {apiError && <p className="text-error text-sm mb-4">{apiError}</p>}
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
            className="mb-6"
            label="Username"
            type="text"
            register={register("username")}
            placeholder="Choose a username"
            error={errors.username?.message}
          />
          <FormInput
            className="mb-6"
            label="Password"
            type="password"
            register={register("password")}
            placeholder="********"
            error={errors.password?.message}
            required
          />
          <FormInput
            className="mb-6"
            label="Confirm Password"
            type="password"
            register={register("confirmPassword")}
            placeholder="********"
            error={errors.confirmPassword?.message}
            required
          />

          <BaseButton
            type="submit"
            className="bg-blue-cream hover:bg-blue-cream hover:scale-105 text-white text-[20px] font-medium w-full min-h-0 mt-6 mb-8 rounded-md h-[60px]"
          >
            Register
          </BaseButton>

          <TextContainer
            text="By signing up, you agree to the terms of service and our privacy policy"
            className="text-sm mb-6"
          />

          <FlexContainer>
            <TextContainer
              text="Already have an account?"
              className="text-sm"
            />
            <Link
              href="/auth/login"
              className="text-blue-cream  ml-2 text-xl font-extrabold hover:underline"
            >
              Sign in
            </Link>
          </FlexContainer>

          <ToastContainer />
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
