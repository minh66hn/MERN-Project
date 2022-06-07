import React from "react";
import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";
const Auth = ({ authRoute }) => {
  let body;

  return (
    <div className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          {body = (
          <>
            {authRoute === "login" && <LoginForm />}
            {authRoute === "register" && <RegisterForm />}
          </>
          );}
          <h1>LearnIt</h1>
          <h4>Keep track of what you are learning</h4>
        </div>
      </div>
    </div>
  );
};

export default Auth;
