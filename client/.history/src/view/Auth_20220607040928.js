import React from "react";
import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";
const Auth = ({ authRoute }) => {
    let body;
    body=(
        <></>
          learnit
      {authRoute === "login" && <LoginForm />}
      {authRoute === "register" && <RegisterForm />}

        
    )
  return (
  );
};

export default Auth;
