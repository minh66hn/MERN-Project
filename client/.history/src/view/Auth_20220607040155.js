import React from "react";
const Auth = ({ authRoute }) => {
  return (
    <div>
      learnit
      {authRoute === "login" && <LoginForm />}
    </div>
  );
};

export default Auth;
