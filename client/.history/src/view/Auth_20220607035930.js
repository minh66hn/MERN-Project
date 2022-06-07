import React from "react";
import {loginForm} fro
const Auth = ({ authRoute }) => {
  return (
    <div>
      learnit
      {authRoute === "login" && <loginForm />}
    </div>
  );
};

export default Auth;
