"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="relative flex w-full h-screen items-start justify-center bg-gray-200 text-gray-800">
      <div className="absolute inset-0 w-full h-full bg-[url('/background.jpg')] bg-cover bg-center opacity-15"></div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="z-10 bg-gray-700 p-4 rounded-lg border-4 text-black mt-10 flex flex-col gap-4 m-6"
      >
        {/* Login input */}
        <input
          {...register("login", { required: "This field is required" })}
          placeholder="Login"
        />
        {/* Error for login field */}
        {errors.login && <span>Error</span>}

        {/* Password input */}
        <input
          {...register("password", { required: "This field is required" })}
          placeholder="Password"
        />
        {/* Error for password field */}
        {errors.epassword && <span>Error</span>}

        {/* Submit button */}
        <input type="submit" className="text-white hover:cursor-pointer" />
      </form>

      {/* Link to home page */}
      <div></div>
    </div>
  );
}
