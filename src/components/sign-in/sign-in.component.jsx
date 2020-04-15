import React, { useState } from "react";
import { connect } from "react-redux";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions.js";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { SignInContainer, ButtonsContainer } from "./sign-in.styles";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userCredentials;

  const handleSubmit = async (e) => {
    e.preventDefault();

    emailSignInStart(email, password);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;

    setCredentials({
      ...userCredentials,
      [name]: value,
    });
  };

  return (
    <SignInContainer>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          handleChange={handleChange}
          type="email"
          name="email"
          label="email"
          value={email}
          required
        />
        <FormInput
          handleChange={handleChange}
          type="password"
          name="password"
          label="password"
          value={password}
          required
        />
        <ButtonsContainer>
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign in with Google
          </CustomButton>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
