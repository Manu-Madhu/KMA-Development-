"use client";
import useFormValidation from "@/hooks/loginHooks/useFormValidation";
import ValidationLogin from "@/hooks/loginHooks/validationLogin";
import React from "react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const initialValues = { username: "", password: "" };
  const navigation = useRouter();
  const { values, errors, isSubmitted, handleChange, handleSubmit } =
    useFormValidation(initialValues, ValidationLogin, navigation);
  return (
    <div className="mt-40 mb-40">
      <form className="max-w-xs mx-auto" onSubmit={handleSubmit}>
        <h1 className="text-[27px] w-full truncate text-black-600 font-semibold text-center mb-2">
          Log in to your account
        </h1>
        <h4 className="text-xs text-center opacity-80 mb-10">
          Welcome back! Please enter your details.
        </h4>
        <div className="mb-5">
          <label
            htmlFor="username"
            className="block mb-2 text-xs text-black-500  "
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={values.username}
            onChange={handleChange}
            className=" border border-[#D7D7D7] text-gray-900 text-sm rounded-lg  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Enter Your Username"
            required
          />
          {errors.username && (
            <p className="text-red-500 text-xs mt-1">{errors.username}</p>
          )}
        </div>

        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-xs text-black-500 "
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            className=" border border-gray-300 text-gray-900 text-sm rounded-lg  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            required
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">{errors.password}</p>
          )}
        </div>
        <div className="w-full flex justify-between items-center  mb-5">
          <div className="flex items-center h-5 gap-2">
            <input
              id="remember"
              type="checkbox"
              defaultValue
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              required
            />
            <label
              htmlFor="remember"
              className="text-xs opacity-80 pt-0.8 truncate"
            >
              Remember for 30 days
            </label>
          </div>

          <div className="text-primaryColor font-bold text-xs truncate">
            Forgot password
          </div>
        </div>

        <button
          type="submit"
          className="text-white  bg-primaryColor mb-6  focus:ring-4   focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full 
              px-5 py-2.5 text-center "
        >
          Sign in
        </button>
        {isSubmitted && (
          <p className="text-green-500 text-center mb-4">
            Login successfully! Redirecting...
          </p>
        )}
        <div className="flex flex-row gap-2">
          <h6 className="text-xs opacity-80 ml-20">Don’t have an account?</h6>
          <h6 className="text-primaryColor text-center text-xs font-bold">
            Sign up
          </h6>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
