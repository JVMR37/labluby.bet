import Card from "../layout/Card";
import { InputField } from "../layout/Input";

import { FlatButton, StyledForm } from "../GlobalStyles";
import { FaArrowRight } from "react-icons/fa";

import React, { useCallback } from "react";
import { ResetPasswordButton } from "../styles/loginCard.style";
import ErrotInputTextStyled from "../styles/errorInputText.style";
import AnimatedDivStyled from "../styles/animatedDiv.style";
import { useHistory } from "react-router-dom";
import useInput from "../hooks/use-input";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import AuthStatusMessage from "./AuthStatusMessageComponent";
import {
  login,
  updateAuthStatusAfterTime,
  AuthStatus,
  selectAuthStatusValue,
} from "../store/authSlice";

import { emailValidator, passValidator } from "../utils/validators";

const LoginCard: React.FC = () => {
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(emailValidator);

  const {
    value: passValue,
    isValid: passIsValid,
    hasError: passHasError,
    valueChangeHandler: passChangeHandler,
    inputBlurHandler: passBlurHandler,
    reset: resetPass,
  } = useInput(passValidator);

  const dispatch = useAppDispatch();
  const history = useHistory();
  const authStatus = useAppSelector(selectAuthStatusValue);

  const formIsValid = passIsValid && emailIsValid;

  const content = useCallback(() => {
    switch (authStatus) {
      case AuthStatus.Loading:
        return (
          <AuthStatusMessage key="Loading Message" status={authStatus}>
            Loading...
          </AuthStatusMessage>
        );
      case AuthStatus.Error:
        return (
          <AuthStatusMessage key="Error Message" status={authStatus}>
            Error when logging in : (
          </AuthStatusMessage>
        );
      case AuthStatus.IDLE:
      default:
        return (
          <FlatButton key="Login Button" isPrimary disabled={!formIsValid}>
            Log In <FaArrowRight />
          </FlatButton>
        );
    }
  }, [authStatus, formIsValid])();

  const handleResetPassButton = () => {
    history.push("/reset-password");
  };

  const submitHandler = async (event: any) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    const result = await dispatch(
      login({ email: emailValue, password: passValue })
    );

    if (result.meta.requestStatus === "rejected") {
      dispatch(updateAuthStatusAfterTime(AuthStatus.IDLE));
    } else if (result.meta.requestStatus === "fulfilled") {
      resetEmail();
      resetPass();
      history.push("/home");
    }

    console.log("Submitted!");
  };

  return (
    <Card>
      <StyledForm onSubmit={submitHandler}>
        <InputField
          key="email"
          type="text"
          value={emailValue}
          hasError={emailHasError}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          id="1"
          placeholder="Email"
        ></InputField>

        {emailHasError && (
          <ErrotInputTextStyled>
            Please enter a valid email address.
          </ErrotInputTextStyled>
        )}

        <InputField
          key={"pass"}
          type="password"
          value={passValue}
          hasError={passHasError}
          onChange={passChangeHandler}
          onBlur={passBlurHandler}
          placeholder="Password"
        ></InputField>

        {passHasError && (
          <ErrotInputTextStyled>
            Please enter a valid password.
          </ErrotInputTextStyled>
        )}

        <ResetPasswordButton onClick={handleResetPassButton}>
          I forget my password
        </ResetPasswordButton>

        <AnimatedDivStyled key={authStatus.toString()}>
          {content}
        </AnimatedDivStyled>
      </StyledForm>
    </Card>
  );
};

export default LoginCard;
