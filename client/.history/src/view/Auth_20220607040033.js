import React from "react";
import { LoginForm } from "./components/auth/loginForm";
const Auth = ({ authRoute }) => {
  return (
    <div>
      learnit
      {authRoute === "login" && <LoginForm />}
    </div>
  );
};

export default Auth;
