import React, { Component } from "react";
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

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState(() => ({ email: "", password: "" }));
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
            required
          />
          <CustomFormInput
            handleChange={this.handleChange}
            label="Password"
            type="password"
            name="password"
            value={this.state.password}
            required
          />
          <CustomButton type="submit">sign in</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
