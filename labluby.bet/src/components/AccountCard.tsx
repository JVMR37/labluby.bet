import React, { useCallback } from "react";
import { FlatButton, StyledForm } from "../GlobalStyles";

import { selectUserData, UpdateStatus } from "../store/authSlice";
import { FaArrowRight } from "react-icons/fa";

import { InputField } from "../layout/Input";
import UpdateStatusMessage from "./UpdateStatusMessageComponent";
import useInput from "../hooks/use-input";
import { emailValidator, isNotEmptyValidator } from "../utils/validators";
import {
  selectUpdateStatusValue,
  updateUserData,
  updateUpdateStatusAfterTime,
} from "../store/authSlice";
import { AccountCardStyledDiv } from "../styles/account.style";
import ErrotInputTextStyled from "../styles/errorInputText.style";
import AnimatedDivStyled from "../styles/animatedDiv.style";
import { useHistory } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { useMountEffect } from "../hooks/use-mount-effect";

const AccountCard: React.FC = (props) => {
  const history = useHistory();
  const userData = useAppSelector(selectUserData);
  const dispatch = useAppDispatch();

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
    setValue: setEmailValue,
  } = useInput(emailValidator);

  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
    setValue: setNameValue,
  } = useInput(isNotEmptyValidator);

  useMountEffect(() => {
    setEmailValue(userData.email!);
    setNameValue(userData.name!);
  });

  const updateStatus = useAppSelector(selectUpdateStatusValue);

  const formIsValid = emailIsValid && nameIsValid;

  const submitHandler = async (event: any) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    const result = await dispatch(
      updateUserData({
        userId: userData.id!,
        email: emailValue,
        name: nameValue,
      })
    );

    if (result.meta.requestStatus === "fulfilled") {
      dispatch(updateUpdateStatusAfterTime(UpdateStatus.IDLE));
      setTimeout(() => {
        resetName();
        resetEmail();
        history.replace("/home");
      }, 2000);
    }

    console.log("Submitted!");
  };

  const content = useCallback(() => {
    switch (updateStatus) {
      case UpdateStatus.Loading:
        return (
          <UpdateStatusMessage key="Loading Message" status={updateStatus}>
            Loading...
          </UpdateStatusMessage>
        );
      case UpdateStatus.Error:
        return (
          <UpdateStatusMessage key="Error Message" status={updateStatus}>
            Failed to register : (
          </UpdateStatusMessage>
        );
      case UpdateStatus.Success:
        return (
          <UpdateStatusMessage key="Success Message" status={updateStatus}>
            Successfully registered : )
          </UpdateStatusMessage>
        );
      case UpdateStatus.IDLE:
      default:
        return (
          <FlatButton isPrimary disabled={!formIsValid}>
            Update <FaArrowRight />
          </FlatButton>
        );
    }
  }, [updateStatus, formIsValid])();

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
