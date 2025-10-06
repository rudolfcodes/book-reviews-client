import axiosInstance from "@/utils/axios";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import FormInput from "../FormInput";
import BaseButton from "@/components/buttons/BaseButton";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  oldPassword: yup.string().required("Old password is required"),
  newPassword: yup
    .string()
    .required("New password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(
      /[!@#$%^&*]/,
      "Password must contain at least one special character"
    ),
});

interface ResetPasswordInput {
  oldPassword: string;
  newPassword: string;
}

const ResetPasswordForm = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get("token");
  const [isValidToken, setIsValidToken] = useState(false);
  const [apiError, setApiError] = useState("");
  const [loading, setLoading] = useState(true);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ResetPasswordInput>({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const verifyToken = async () => {
      if (!token) {
        setApiError("Invalid or missing token");
        setTimeout(() => {
          router.push("/auth/forgot-password");
        }, 5000);
        return;
      }

      try {
        const response = await axiosInstance.post(
          "/api/users/verify-reset-token",
          { token }
        );
        if (response.data.valid) {
          setIsValidToken(true);
        } else {
          setApiError("Token verification failed");
          setTimeout(() => {
            router.push("/auth/forgot-password");
          }, 5000);
        }
      } catch (error) {
        setApiError("Token verification failed");
        setTimeout(() => {
          router.push("/auth/forgot-password");
        }, 5000);
      } finally {
        setLoading(false);
      }
    };

    verifyToken();
  }, [token, router]);

  const onSubmit = async (data: ResetPasswordInput) => {
    try {
      const reponse = await axiosInstance.post("/api/users/reset-password", {
        oldPassword: data.oldPassword,
        newPassword: data.newPassword,
        token,
      });

      if (reponse.data.success) {
        toast.success("Password reset successful! Redirecting to login...", {
          position: "top-center",
          autoClose: 2000,
        });
        router.push("/auth/login");
      }
    } catch (error) {
      setApiError("Failed to reset password");
      toast.error("Failed to reset password", {
        position: "top-center",
        autoClose: 2000,
      });
      console.error("Reset password error: ", error);
    }
  };

  if (loading) {
    return <div>Verifying reset link...</div>;
  }

  if (!isValidToken) {
    return (
      <div className="flex flex-col items-center justify-center w-full mt-[150px] lg:mt-0">
        <h1 className="text-black mb-4 text-center">
          Invalid or Expired Token
        </h1>
        <p className="text-[#777777] text-center block subtitle">
          The reset link is invalid or has expired. Please request a new one.
        </p>
        <BaseButton
          type="button"
          onClick={() => router.push("/auth/forgot-password")}
        >
          Request New Link
        </BaseButton>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center w-full mt-[150px] lg:mt-0">
      <div className="w-full md:w-[700px]">
        <h1 className="text-black mb-4 text-center">Reset Password</h1>
        <span className="text-[#777777] text-center block subtitle">
          {isValidToken
            ? "Enter your new password below"
            : "Verifying token..."}
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
            label="Old Password"
            type="password"
            register={register("oldPassword")}
            placeholder="********"
            error={errors.oldPassword?.message}
            required
          />

          <FormInput
            className="mb-6"
            label="New Password"
            type="password"
            register={register("newPassword", {
              required: "New password is required",
              minLength: {
                value: 8,
                message: "New password must be at least 8 characters long",
              },
              validate: (value) =>
                value !== watch("oldPassword") ||
                "New password must be different from old password",
            })}
            placeholder="********"
            error={errors.newPassword?.message}
            required
          />
          <BaseButton type="submit" className="w-full">
            Reset Password
          </BaseButton>

          <ToastContainer />
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordForm;
