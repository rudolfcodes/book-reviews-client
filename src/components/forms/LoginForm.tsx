import React from "react";
import { FieldErrors } from "react-hook-form";

type Props = {
  handleSubmit: (data: any) => void;
  onSubmit: (data: { email: string; password: string }) => Promise<void>;
  errors: FieldErrors<{ email: string; password: string }>;
  register: any;
};

const LoginForm = ({ handleSubmit, onSubmit, errors, register }: Props) => {
  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h1 className="text-black mb-11 text-3xl">Welcome Back</h1>
      <span className="">Enter your login details below</span>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register("email")} />
        {errors.email && <span>{errors.email.message}</span>}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" {...register("password")} />
        {errors.password && <span>{errors.password.message}</span>}
      </div>

      <div>
        <a href="/forgot-password" className="">
          Forgot Password?
        </a>
      </div>

      <button type="submit">Login</button>

      <div>
        <span>Don't have an account?</span>
        <a href="/register" className="">
          {" "}
          Sign up
        </a>
      </div>
    </form>
  );
};

export default LoginForm;
