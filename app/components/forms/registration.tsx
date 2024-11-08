"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";

export default function RegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col relative  w-full h-screen items-center justify-center bg-gray-100 text-gray-800">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="z-10 bg-white p-8 rounded-lg  text-gray-700 flex flex-col items-center gap-6 w-80 max-w-full"
      >
        <h2 className="text-2xl font-semibold text-gray-800">Registration</h2>

        <input
          {...register("email", { required: "Email is required" })}
          placeholder="e-mail"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
        {typeof errors.login?.message === "string" && (
          <span className="text-sm text-red-600">{errors.login.message}</span>
        )}
        <input
          {...register("fullname", { required: "Full Name is required" })}
          placeholder="Full Name"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
        {typeof errors.login?.message === "string" && (
          <span className="text-sm text-red-600">{errors.login.message}</span>
        )}
        <input
          {...register("password", { required: "Password is required" })}
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
        {typeof errors.password?.message === "string" && (
          <span className="text-sm text-red-600">
            {errors.password.message}
          </span>
        )}
        <button
          type="submit"
          className="w-full bg-gray-400 text-white py-2 rounded-md hover:bg-black transition duration-150"
        >
          Submit
        </button>
      </form>
      <div className="z-10 bg-white px-8 pb-8 rounded-lg text-gray-700 flex flex-col items-center gap-6 w-80 max-w-full">
        <h2 className="text-black">Have an Account?</h2>
        <button className="w-full mx-14 bg-gray-500 text-white py-2 rounded-md hover:bg-black transition duration-150">
          <Link href="/login">Log In</Link>
        </button>
        <h2 className="text-black">or</h2>
        <button className="w-full mx-14 bg-gray-400 text-white py-2 rounded-md hover:bg-black transition duration-150">
          <Link href="/">Go to Home Page</Link>
        </button>
      </div>
    </div>
  );
}
