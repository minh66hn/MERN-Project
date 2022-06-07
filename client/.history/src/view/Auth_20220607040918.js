import React from "react";
import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";
const Auth = ({ authRoute }) => {
    let body;
    body=(
    <div>
      learnit
      {authRoute === "login" && <LoginForm />}
      {authRoute === "register" && <RegisterForm />}
    </div>
        
    )
  return (
  );
};

export default Auth;
