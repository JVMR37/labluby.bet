import React, { useCallback } from "react";

import Card from "../layout/Card";
import { FlatButton, StyledForm } from "../GlobalStyles";
import { FaArrowRight } from "react-icons/fa";

import useInput from "../hooks/use-input";
import { emailValidator } from "../utils/validators";
import { InputField } from "../layout/Input";
import ErrotInputTextStyled from "../styles/errorInputText.style";
import AnimatedDivStyled from "../styles/animatedDiv.style";

import { useHistory } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import AuthStatusMessage from "./AuthStatusMessageComponent";
import {
  sendLinkToResetPass,
  updateAuthStatusAfterTime,
  AuthStatus,
  selectAuthStatusValue,
} from "../store/authSlice";

const ResetPassCard: React.FC = () => {
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(emailValidator);

  const history = useHistory();
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(selectAuthStatusValue);

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
            Failed to send link : (
          </AuthStatusMessage>
        );
      case AuthStatus.Success:
        return (
          <AuthStatusMessage key="Success Message" status={authStatus}>
            Link sent successfully :)
          </AuthStatusMessage>
        );
      case AuthStatus.IDLE:
      default:
        return (
          <FlatButton isPrimary disabled={!emailIsValid}>
            Send link <FaArrowRight />
          </FlatButton>
        );
    }
  }, [authStatus, emailIsValid])();

  const submitHandler = async (event: any) => {
    event.preventDefault();

    if (!emailIsValid) {
      return;
    }

    const result = await dispatch(sendLinkToResetPass(emailValue));

    dispatch(updateAuthStatusAfterTime(AuthStatus.IDLE));

    if (result.meta.requestStatus === "fulfilled") {
      setTimeout(() => {
        resetEmail();
        history.push("/login");
      }, 2000);
    }

    console.log("Submitted!");

    resetEmail();
  };

  return (
    <Card>
      <StyledForm onSubmit={submitHandler}>
        <InputField
          type="text"
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          id="1"
          key="email"
          placeholder="Email"
        ></InputField>

        {emailHasError && (
          <ErrotInputTextStyled>
            Please enter a valid email address.
          </ErrotInputTextStyled>
        )}
        <AnimatedDivStyled>{content}</AnimatedDivStyled>
      </StyledForm>
    </Card>
  );
};

export default ResetPassCard;
