import React from "react";
import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";
const Auth = ({ authRoute }) => {
    let body;
    boy=()
  return (
    <div>
      learnit
      {authRoute === "login" && <LoginForm />}
      {authRoute === "register" && <RegisterForm />}
    </div>
  );
};

export default Auth;
