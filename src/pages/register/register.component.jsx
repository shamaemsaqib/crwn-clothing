import React from "react";

import "./register.styles.scss";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

function Register(props) {
  return (
    <div className="register-container">
      <SignIn />
      <SignUp />
    </div>
  );
}

export default Register;
