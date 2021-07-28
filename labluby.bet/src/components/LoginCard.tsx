import Card from "../layout/Card";
import { InputField } from "../layout/Input";

import { FlatButton, StyledForm } from "../GlobalStyles";
import { FaArrowRight } from "react-icons/fa";

import React from "react";
import { ResetPasswordButton } from "../styles/loginCard.style";
import ErrotInputTextStyled from "../styles/errorInputText.style";
import { useHistory } from "react-router-dom";
import useInput from "../hooks/use-input";
import { useAppDispatch } from "../hooks/hooks";
import { login } from "../store/authSlice";

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

  const handleResetPassButton = () => {
    history.push("/reset-password");
  };

  const formIsValid = passIsValid && emailIsValid;

  const submitHandler = (event: any) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    dispatch(login({ email: emailValue, password: passValue }));
    console.log("Submitted!");

    resetEmail();
    resetPass();
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

        <div>
          <ResetPasswordButton onClick={handleResetPassButton}>
            I forget my password
          </ResetPasswordButton>
        </div>

        <FlatButton isPrimary disabled={!formIsValid}>
          Log In <FaArrowRight />
        </FlatButton>
      </StyledForm>
    </Card>
  );
};

export default LoginCard;
