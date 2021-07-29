import React from "react";

import Card from "../layout/Card";
import { FlatButton, StyledForm } from "../GlobalStyles";
import { FaArrowRight } from "react-icons/fa";

import useInput from "../hooks/use-input";
import { emailValidator } from "../utils/validators";
import { InputField } from "../layout/Input";
import ErrotInputTextStyled from "../styles/errorInputText.style";
import AnimatedDivStyled from "../styles/animatedDiv.style";

const ResetPassCard: React.FC = () => {
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(emailValidator);

  const submitHandler = (event: any) => {
    event.preventDefault();

    if (!emailIsValid) {
      return;
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
        <AnimatedDivStyled>
          <FlatButton isPrimary>
            Send link <FaArrowRight />
          </FlatButton>
        </AnimatedDivStyled>
      </StyledForm>
    </Card>
  );
};

export default ResetPassCard;
