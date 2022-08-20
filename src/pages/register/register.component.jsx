import React from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import "./register.styles.scss";

function Register(props) {
  return (
    <div className="register-container">
      <SignIn />
      <SignUp />
    </div>
  );
}

export default Register;
