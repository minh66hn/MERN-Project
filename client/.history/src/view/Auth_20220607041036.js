import React from "react";
import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";
const Auth = ({ authRoute }) => {
  let body;
  body = (
    <>
      learnit
      {authRoute === "login" && <LoginForm />}
      {authRoute === "register" && <RegisterForm />}
    </>
  );
  return <div className="landing">
      <div className="dark-overlay">
          .landing
      </div>
  </div>;
};

export default Auth;
