import React from "react";
import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";
const Auth = ({ authRoute }) => {
  return (
    <div>
      learnit
      {authRoute === "login" && <LoginForm />}
      {authRoute === "register" && <RegisterForm />}
    </div>
  );
};

export default Auth;
