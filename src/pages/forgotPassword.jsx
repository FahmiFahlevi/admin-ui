import React from "react";
import { Link } from "react-router-dom";
import Logo from "../components/Elements/Logo";
import FormForgotPassword from "../components/Fragment/FormForgotPassword";

const ForgotPassword = () => {
  return (
    <div className="flex justify-center min-h-screen items-center bg-special-mainBg">
      <div className="w-full max-w-sm">
        <Logo />
        <div className=" mt-10 text-center text-2xl font-bold">Forgot Password ?</div>
        <div className="my-8 text-center text-xl text-gray-02">Enter your email address to get the password reset link.</div>
        <FormForgotPassword />
        <Link to="/login" className="mt-5 flex justify-center text-gray-03">
          Back to login
        </Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
