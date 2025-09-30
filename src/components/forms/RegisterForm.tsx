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

interface IRegisterFormInput {
  username: string;
  email: string;
  password?: string;
  confirmPassword?: string;
}

const schema = yup.object().shape({
  username: yup.string().required("Username is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup.string().min(8, "Password must be at least 8 characters long"),
  confirmPassword: yup.string(),
});

const TIMEOUT = 3500;

const RegisterForm = ({
  username,
  email,
  password,
  confirmPassword,
}: IRegisterFormInput) => {
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
    <div className="min-h-screen mx-5 flex flex-col items-center justify-center bg-off-white w-full">
      <h1 className="text-black mb-11 text-3xl">Join the club now</h1>
      <div className="bg-white w-full md:w-[700px] shadow-custom-black pb-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-8 rounded mx-auto xs:w-full md:w-1/2"
        >
          <h2 className="text-center text-3xl font-medium mb-6">
            Create Account
          </h2>
          {apiError && <p className="text-red-500 text-sm mb-4">{apiError}</p>}

          <FormInput
            label="Username"
            type="text"
            register={register("username")}
            error={errors.username?.message}
            required
          />
          <FormInput
            label="Email"
            type="email"
            register={register("email")}
            error={errors.email?.message}
            required
          />
          <FormInput
            label="Password"
            type="password"
            register={register("password")}
            error={errors.password?.message}
            required
          />
          <FormInput
            label="Confirm Password"
            type="password"
            register={register("confirmPassword")}
            error={errors.confirmPassword?.message}
            required
          />

          <BaseButton
            type="submit"
            className="bg-black text-white w-full h-8 min-h-0 mb-8 rounded-3xl"
          >
            Sign up
          </BaseButton>

          <BaseButton
            type="submit"
            className="btn bg-black text-white w-full h-8 min-h-0 mb-8 rounded-3xl"
          >
            Sign in
          </BaseButton>

          <p className="text-sm mb-6">
            By signing up, you agree to the terms of service and our privacy
            policy
          </p>
          <div className="flex">
            <p className="text-sm">Already have an account?</p>
            <Link
              href="/auth/login"
              className="text-black ml-2 text-sm underline hover:underline"
            >
              Sign in
            </Link>
          </div>

          <ToastContainer />
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
