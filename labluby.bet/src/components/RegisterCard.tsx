import React, { useCallback } from "react";

import { FlatButton, StyledForm } from "../GlobalStyles";
import { InputField } from "../layout/Input";

import { FaArrowRight } from "react-icons/fa";

import ErrotInputTextStyled from "../styles/errorInputText.style";
import AnimatedDivStyled from "../styles/animatedDiv.style";
import { useHistory } from "react-router-dom";
import useInput from "../hooks/use-input";
import {
  emailValidator,
  passValidator,
  isNotEmptyValidator,
} from "../utils/validators";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import AuthStatusMessage from "./AuthStatusMessageComponent";
import {
  register,
  updateAuthStatusAfterTime,
  AuthStatus,
  selectAuthStatusValue,
} from "../store/authSlice";
import { RegisterCardStyledDiv } from "../styles/registerCard.style";

const RegisterCard: React.FC = () => {
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

  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput(isNotEmptyValidator);

  const history = useHistory();
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(selectAuthStatusValue);

  const formIsValid = passIsValid && emailIsValid && nameIsValid;

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
            Failed to register : (
          </AuthStatusMessage>
        );
      case AuthStatus.Success:
        return (
          <AuthStatusMessage key="Success Message" status={authStatus}>
            Successfully registered : )
          </AuthStatusMessage>
        );
      case AuthStatus.IDLE:
      default:
        return (
          <FlatButton isPrimary disabled={!formIsValid}>
            Register <FaArrowRight />
          </FlatButton>
        );
    }
  }, [authStatus, formIsValid])();

  const submitHandler = async (event: any) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    const result = await dispatch(
      register({ name: nameValue, email: emailValue, password: passValue })
    );

    dispatch(updateAuthStatusAfterTime(AuthStatus.IDLE));

    if (result.meta.requestStatus === "fulfilled") {
      setTimeout(() => {
        resetName();
        resetEmail();
        resetPass();
        history.push("/login");
      }, 2000);
    }

    console.log("Submitted!");
  };

  return (
    <RegisterCardStyledDiv>
      <StyledForm onSubmit={submitHandler}>
        <InputField
          key="name-input"
          type="text"
          value={nameValue}
          hasError={nameHasError}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          placeholder="Name"
        ></InputField>

        {nameHasError && (
          <ErrotInputTextStyled>
            Please enter a valid name.
          </ErrotInputTextStyled>
        )}

        <InputField
          key="email-input"
          type="text"
          value={emailValue}
          hasError={emailHasError}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
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
        <AnimatedDivStyled>{content}</AnimatedDivStyled>
      </StyledForm>
    </RegisterCardStyledDiv>
  );
};

export default RegisterCard;
