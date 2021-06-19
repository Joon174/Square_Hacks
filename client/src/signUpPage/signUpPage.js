import React from "react";
import SignUp from "../components/signup/signup";
import Navbar from "../components/navbar/navbar";
import "./signUpPage.css";

const SignUpPage = () => {
  return (
    <div className="page">
      <Navbar />
      <SignUp />
    </div>
  );
};

export default SignUpPage;
