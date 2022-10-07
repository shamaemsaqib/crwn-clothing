import React from "react";

import "./auth.styles.scss";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

function Auth(props) {
  return (
    <div className="auth-container">
      <SignIn />
      <SignUp />
    </div>
  );
}

export default Auth;
