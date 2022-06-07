import React from "react";

const Auth = ({ authRoute }) => {
  return (
    <div>
      learnit
      {authRoute === "login" && <loginForm />}
    </div>
  );
};

export default Auth;
