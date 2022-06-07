import React from "react";
import { loginForm } from "./components/auth/loginForm";
const Auth = ({ authRoute }) => {
  return (
    <div>
      learnit
      {authRoute === "login" && <loginForm />}
    </div>
  );
};

export default Auth;
