import Card from "../layout/Card";
import { InputField } from "../layout/Input";

import { FlatButton, StyledForm } from "../GlobalStyles";
import { FaArrowRight } from "react-icons/fa";

import React from "react";
import { ResetPasswordButton } from "../styles/loginCard.style";
import ErrotInputTextStyled from "../styles/errorInputText.style";
import { useHistory } from "react-router-dom";
import useInput from "../hooks/use-input";
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
  const history = useHistory();

  const handleResetPassButton = () => {
    history.push("/reset-password");
  };

  let formIsValid = false;

  if (passIsValid && emailIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event: any) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log("Submitted!");

    resetEmail();
    resetPass();
  };

  return (
    <Card>
      <StyledForm onSubmit={submitHandler}>
        <div>
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
        </div>

        <hr />
        <input
          type="password"
          value={passValue}
          onChange={passChangeHandler}
          onBlur={passBlurHandler}
          id="2"
          key={"pass"}
          // autoFocus={true}
          placeholder="Password"
        ></input>

        {passHasError && (
          <ErrotInputTextStyled>
            Please enter a valid password.
          </ErrotInputTextStyled>
        )}

        <hr />

        <ResetPasswordButton onClick={handleResetPassButton}>
          I forget my password
        </ResetPasswordButton>

        <FlatButton isPrimary disabled={!formIsValid}>
          Log In <FaArrowRight />
        </FlatButton>
      </StyledForm>
    </Card>
  );
};

export default LoginCard;
