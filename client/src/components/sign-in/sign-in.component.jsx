import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";

import "./sign-in.styles.scss";

import CustomButton from "../custom-button/custom-button.component";
import CustomFormInput from "../custom-form-input/custom-form-input.component";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

const SignIn = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
    errMsg: "",
  });
  const { email, password, errMsg } = state;

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setState({ email: "", password: "", errMsg: "" });
    } catch (err) {
      switch (err.code) {
        case "auth/user-not-found":
          setState({
            ...state,
            errMsg: "invalid credentials",
          });
          break;
        case "auth/wrong-password":
          setState({
            ...state,
            errMsg: "invalid credentials",
          });
          break;
        default:
          console.log(err);
          break;
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div className="login-container">
      <h2 className="login-title">I already have an account</h2>
      <span className="login-subtitle">
        Log in with your email and password
      </span>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <CustomFormInput
            handleChange={handleChange}
            label="Email"
            type="email"
            name="email"
            value={email}
            id="in-email"
            required
          />
          <CustomFormInput
            key={1}
            handleChange={handleChange}
            label="Password"
            type="password"
            name="password"
            value={password}
            id="in-pass"
            required
          />
        </div>
        {errMsg ? <p className="error">{errMsg}</p> : null}
        <div className="btns-container">
          <CustomButton type="submit">sign in</CustomButton>
          <CustomButton
            type="button"
            onClick={signInWithGoogle}
            isGoogleButton="true"
          >
            sign in with google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
