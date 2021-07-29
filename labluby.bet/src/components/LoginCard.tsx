import Card from "../layout/Card";
import { InputField } from "../layout/Input";

import { FlatButton, StyledForm } from "../GlobalStyles";
import { FaArrowRight } from "react-icons/fa";

import React, { useCallback } from "react";
import { ResetPasswordButton } from "../styles/loginCard.style";
import ErrotInputTextStyled from "../styles/errorInputText.style";
import { AnimatedDiv } from "../styles/animatedDiv.style";
import { useHistory } from "react-router-dom";
import useInput from "../hooks/use-input";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
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
          <span key="Loading Message">
            Carregando missão da Turma do Bairro...
          </span>
        );
      case AuthStatus.Error:
        return <span key="IDLE Message">Deu ruim ae bro</span>;
      case AuthStatus.IDLE:
      default:
        // setState(true);

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

        <AnimatedDiv key={authStatus.toString()}>{content}</AnimatedDiv>
      </StyledForm>
    </Card>
  );
};

export default LoginCard;
