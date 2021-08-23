import React, { useCallback } from "react";
import { FlatButton, StyledForm } from "../GlobalStyles";

import { selectUserData } from "../store/authSlice";
import { FaArrowRight } from "react-icons/fa";

import { InputField } from "../layout/Input";
import AuthStatusMessage from "./AuthStatusMessageComponent";
import useInput from "../hooks/use-input";
import { emailValidator, isNotEmptyValidator } from "../utils/validators";
import { AuthStatus, selectAuthStatusValue } from "../store/authSlice";
import { AccountCardStyledDiv } from "../styles/account.style";
import ErrotInputTextStyled from "../styles/errorInputText.style";
import AnimatedDivStyled from "../styles/animatedDiv.style";
import { useHistory } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";

const AccountCard: React.FC = (props) => {
  const userData = useAppSelector(selectUserData);
  const dispatch = useAppDispatch();

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(emailValidator);

  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput(isNotEmptyValidator);

  const authStatus = useAppSelector(selectAuthStatusValue);

  const formIsValid = emailIsValid && nameIsValid;

  const submitHandler = async (event: any) => {
    event.preventDefault();
    //TODO: Implementar lógica

    if (!formIsValid) {
      return;
    }

    // const result = await dispatch(
    //   register({ name: nameValue, email: emailValue, password: passValue })
    // );

    // dispatch(updateAuthStatusAfterTime(AuthStatus.IDLE));

    // if (result.meta.requestStatus === "fulfilled") {
    //   setTimeout(() => {
    //     resetName();
    //     resetEmail();
    //     resetPass();
    //     history.push("/login");
    //   }, 2000);
    // }

    console.log("Submitted!");
  };

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
            Update <FaArrowRight />
          </FlatButton>
        );
    }
  }, [authStatus, formIsValid])();

  return (
    <AccountCardStyledDiv>
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

        <AnimatedDivStyled>{content}</AnimatedDivStyled>
      </StyledForm>
    </AccountCardStyledDiv>
  );
};

export default AccountCard;
