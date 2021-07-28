import React from "react";

import { FlatButton, StyledForm } from "../GlobalStyles";
import Card from "../layout/Card";
import { InputField } from "../layout/Input";

import { FaArrowRight } from "react-icons/fa";

import ErrotInputTextStyled from "../styles/errorInputText.style";
import { useHistory } from "react-router-dom";
import useInput from "../hooks/use-input";
import {
  emailValidator,
  passValidator,
  isNotEmptyValidator,
} from "../utils/validators";

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

  const formIsValid = passIsValid && emailIsValid && nameIsValid;

  const submitHandler = (event: any) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log("Submitted!");

    resetName();
    resetEmail();
    resetPass();
  };

  return (
    <Card>
      <StyledForm onSubmit={submitHandler}>
        <InputField
          key="name-input"
          type="text"
          value={nameValue}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          placeholder="Name"
        ></InputField>

        {nameHasError && (
          <ErrotInputTextStyled>
            Please enter a valid name.
          </ErrotInputTextStyled>
        )}

        <hr />

        <InputField
          key="email-input"
          type="text"
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          placeholder="Email"
        ></InputField>

        {emailHasError && (
          <ErrotInputTextStyled>
            Please enter a valid email address.
          </ErrotInputTextStyled>
        )}

        <hr />
        <InputField
          key={"pass"}
          type="password"
          value={passValue}
          onChange={passChangeHandler}
          onBlur={passBlurHandler}
          placeholder="Password"
        ></InputField>

        {passHasError && (
          <ErrotInputTextStyled>
            Please enter a valid password.
          </ErrotInputTextStyled>
        )}

        <hr />

        <FlatButton isPrimary disabled={!formIsValid}>
          Register <FaArrowRight />
        </FlatButton>
      </StyledForm>
    </Card>
  );
};

export default RegisterCard;
