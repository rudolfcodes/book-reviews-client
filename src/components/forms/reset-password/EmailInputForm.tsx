import React, { useState } from "react";
import FormInput from "../FormInput";
import BaseButton from "@/components/buttons/BaseButton";
import { toast, ToastContainer } from "react-toastify";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import axiosInstance from "@/utils/axios";

type EmailInputFormProps = {
  email: string;
};

const schema: yup.ObjectSchema<EmailInputFormProps> = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
});

const EmailInputForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [apiError, setApiError] = useState("");
  const router = useRouter();

  const onSubmit = async (data: EmailInputFormProps) => {
    try {
      const response = await axiosInstance.post("/api/users/forgot-password", {
        email: data.email,
      });
      if (response.data.success) {
        toast.success("Reset link sent! Please check your email.", {
          position: "top-center",
          autoClose: false,
        });
      }
    } catch (error) {
      console.error("Reset password error: ", error);
      setApiError("Failed to send reset link. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full mt-[150px] lg:mt-0">
      <div className="w-full md:w-[700px]">
        <h1 className="text-black mb-4 text-center">Reset Password</h1>
        <span className="text-[#777777] text-center block subtitle">
          Enter your email to receive a password reset link
        </span>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded px-8 mx-auto xs:w-full md:w-3/4 lg:w-2/3 my-8"
        >
          {apiError && (
            <p className="text-error text-base text-center mb-4">{apiError}</p>
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

          <BaseButton
            type="submit"
            className="bg-blue-cream hover:bg-blue-cream hover:scale-105 text-white text-[20px] font-medium w-full min-h-0 mt-6 mb-8 rounded-md h-[60px]"
          >
            Send Reset Link
          </BaseButton>

          <ToastContainer />
        </form>
      </div>
    </div>
  );
};

export default EmailInputForm;
