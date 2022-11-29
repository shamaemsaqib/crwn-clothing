import React, { useState } from "react";

import "./sign-up.styles.scss";

import CustomButton from "../custom-button/custom-button.component";
import CustomFormInput from "../custom-form-input/custom-form-input.component";

import {
  addProfileDocumentToFirestore,
  signUpWithEmail,
} from "../../firebase/firebase.utils";

const SignUp = () => {
  const [state, setState] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
    errMsg: "",
  });
  const { displayName, email, password, confirmPassword, errMsg } = state;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setState({
        ...state,
        errMsg: "passwords do not match",
      });
      return;
    }

    try {
      const { user } = await signUpWithEmail(email, password);

      await addProfileDocumentToFirestore(user, { displayName });

      setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
        errMsg: "",
      });
    } catch (err) {
      switch (err.code) {
        case "auth/weak-password":
          setState({
            ...state,
            errMsg: "password should be min 6 characters long",
          });
          break;
        case "auth/email-already-in-use":
          setState({
            ...state,
            errMsg: "user with this email already exists",
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
    <div className="sign-up-container">
      <h2 className="sign-up-title">I do not have a account</h2>
      <span className="sign-up-subtitle">
        Sign up with your email and password
      </span>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <CustomFormInput
            key={2}
            handleChange={handleChange}
            label="Display Name"
            type="text"
            name="displayName"
            id="up-name"
            value={displayName}
            required
          />
          <CustomFormInput
            key={3}
            handleChange={handleChange}
            label="Email"
            type="email"
            name="email"
            value={email}
            id="up-email"
            required
          />
          <CustomFormInput
            key={4}
            handleChange={handleChange}
            label="Password"
            type="password"
            name="password"
            value={password}
            id="up-pass"
            required
          />
          <CustomFormInput
            key={5}
            handleChange={handleChange}
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            id="up-cpass"
            required
          />
        </div>
        {errMsg ? <p className="error">{errMsg}</p> : null}
        <div className="btns-container">
          <CustomButton type="submit" onClick={handleSubmit}>
            sign up
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
