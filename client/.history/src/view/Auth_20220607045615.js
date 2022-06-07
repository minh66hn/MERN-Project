import React from "react";
import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";

const Auth = ({ authRoute }) => {
  let body;
  body = (
    <>
      {authRoute === "login" && <LoginForm />}
      {authRoute === "register" && <RegisterForm />}
    </>
  );
  return (
    <div>

      <div className="landing">
        <div className="dark-overlay">
          <div className="landing-inner"></div>
        </div>
      </div>
    </div>
  );
};
export default Auth;
