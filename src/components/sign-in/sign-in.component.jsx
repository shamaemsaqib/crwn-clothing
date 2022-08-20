import { signInWithEmailAndPassword } from "firebase/auth";
import React, { Component } from "react";
import { auth, signInWithGoogle } from "../../data/firebase.utils";
import CustomButton from "../custom-button/custom-button.component";
import CustomFormInput from "../custom-form-input/custom-form-input.component";
import "./sign-in.styles.scss";

export class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      this.setState(() => ({ email: "", password: "" }));
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
      <div className="login-container">
        <h2 className="login-title">I already have an account</h2>
        <span className="login-subtitle">
          Log in with your email and password
        </span>
        <form onSubmit={this.handleSubmit}>
          <CustomFormInput
            handleChange={this.handleChange}
            label="Email"
            type="email"
            name="email"
            value={this.state.email}
            id="in-email"
            required
          />
          <CustomFormInput
            key={1}
            handleChange={this.handleChange}
            label="Password"
            type="password"
            name="password"
            value={this.state.password}
            id="in-pass"
            required
          />
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
  }
}

export default SignIn;
