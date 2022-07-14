import React from "react";
import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";
import { AuthContext } from "react";
import { Redirect } from "react-router-dom";
import Spinner from 'react-bootstrap'
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
          <div className="landing-inner">
            {/* <h1>Nguyễn Thị Thu Trang</h1>
            <h4>Keep track of what you are learning</h4> */}
            {body}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Auth;
