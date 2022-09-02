import React, { Component } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";

import "./sign-up.styles.scss";

import CustomButton from "../custom-button/custom-button.component";
import CustomFormInput from "../custom-form-input/custom-form-input.component";

import {
  addProfileDocumentToFirestore,
  auth,
} from "../../firebase/firebase.utils";
export class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await addProfileDocumentToFirestore(user, { displayName });

      this.setState(() => ({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      }));
    } catch (err) {
      console.log(err);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState(() => ({ [name]: value }));
  };

  render() {
    return (
      <div className="sign-up-container">
        <h2 className="sign-up-title">I do not have a account</h2>
        <span className="sign-up-subtitle">
          Sign up with your email and password
        </span>
        <form onSubmit={this.handleSubmit}>
          <CustomFormInput
            key={2}
            handleChange={this.handleChange}
            label="Display Name"
            type="text"
            name="displayName"
            id="up-name"
            value={this.state.displayName}
            required
          />
          <CustomFormInput
            key={3}
            handleChange={this.handleChange}
            label="Email"
            type="email"
            name="email"
            value={this.state.email}
            id="up-email"
            required
          />
          <CustomFormInput
            key={4}
            handleChange={this.handleChange}
            label="Password"
            type="password"
            name="password"
            value={this.state.password}
            id="up-pass"
            required
          />
          <CustomFormInput
            key={5}
            handleChange={this.handleChange}
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            value={this.state.confirmPassword}
            id="up-cpass"
            required
          />
          <CustomButton type="submit" onClick={this.handleSubmit}>
            sign up
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
