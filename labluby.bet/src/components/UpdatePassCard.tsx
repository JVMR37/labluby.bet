import React, { useCallback, useMemo } from "react";

import Card from "../layout/Card";
import { FlatButton, StyledForm } from "../GlobalStyles";
import { FaArrowRight } from "react-icons/fa";

import useInput from "../hooks/use-input";
import { passValidator, confirmPassValidator } from "../utils/validators";
import { InputField } from "../layout/Input";
import ErrotInputTextStyled from "../styles/errorInputText.style";
import AnimatedDivStyled from "../styles/animatedDiv.style";

import { useHistory } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { useQuery } from "../hooks/use-query";

import AuthStatusMessage from "./AuthStatusMessageComponent";
import {
  updatePassword,
  AuthStatus,
  updateAuthStatusAfterTime,
  selectAuthStatusValue,
} from "../store/authSlice";

const ResetPassCard: React.FC = () => {
  const query = useQuery();
  const token = useMemo(() => query.get("token"), [query]);

  const {
    value: passValue,
    isValid: passIsValid,
    hasError: passHasError,
    valueChangeHandler: passChangeHandler,
    inputBlurHandler: passBlurHandler,
    reset: resetPass,
  } = useInput(passValidator);

  const {
    value: confirmPassValue,
    isValid: confirmPassIsValid,
    hasError: confirmPassHasError,
    valueChangeHandler: confirmPassChangeHandler,
    inputBlurHandler: confirmPassBlurHandler,
    reset: resetConfirmPass,
  } = useInput(confirmPassValidator, passValue);

  const history = useHistory();
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(selectAuthStatusValue);

  const formIsValid = useMemo(
    () => passIsValid && confirmPassIsValid,
    [confirmPassIsValid, passIsValid]
  );

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
            Failed to update password : (
          </AuthStatusMessage>
        );
      case AuthStatus.Success:
        return (
          <AuthStatusMessage key="Success Message" status={authStatus}>
            Password updated successfully :)
          </AuthStatusMessage>
        );
      case AuthStatus.IDLE:
      default:
        return (
          <FlatButton isPrimary disabled={!formIsValid}>
            Update
            <FaArrowRight />
          </FlatButton>
        );
    }
  }, [authStatus, formIsValid])();

  const submitHandler = async (event: any) => {
    event.preventDefault();

    const result = await dispatch(
      updatePassword({
        token: token!,
        password: passValue,
        password_confirmation: confirmPassValue,
      })
    );

    if (result.meta.requestStatus === "fulfilled") {
      setTimeout(() => {
        resetPass();
        resetConfirmPass();

        history.replace("/login");
      }, 2000);
    } else {
      setTimeout(() => {
        dispatch(updateAuthStatusAfterTime(AuthStatus.IDLE));
      }, 2000);
    }
  };

  return (
    <Card>
      <StyledForm onSubmit={submitHandler}>
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

        <InputField
          key={"passConfirmation"}
          type="password"
          value={confirmPassValue}
          hasError={confirmPassHasError}
          onChange={confirmPassChangeHandler}
          onBlur={confirmPassBlurHandler}
          placeholder="Password"
        ></InputField>

        {confirmPassHasError && (
          <ErrotInputTextStyled>
            Please enter the same value as the 'Password' field.
          </ErrotInputTextStyled>
        )}
        <AnimatedDivStyled>{content}</AnimatedDivStyled>
      </StyledForm>
    </Card>
  );
};

export default ResetPassCard;
