import Card from "../layout/Card";
import { FlatButton } from "../GlobalStyles";
import { FaArrowRight } from "react-icons/fa";

import React from "react";
import styled from "styled-components";
import { ResetPasswordButton } from "../styles/loginCard.style";
import { useHistory } from "react-router-dom";

// interface IProps extends React.HTMLProps<HTMLInputElement> {}

const LoginCard: React.FC = () => {
  const Form = styled.form`
    padding-top: 10px;
  `;

  const history = useHistory();

  const handleResetPassButton = () => {
    history.push("/reset-password");
  };

  return (
    <Card>
      <Form>
        <input placeholder="Email"></input>

        <hr />
        <input placeholder="Password"></input>

        <hr />

        <ResetPasswordButton onClick={handleResetPassButton}>
          I forget my password
        </ResetPasswordButton>

        <FlatButton isPrimary>
          Log In <FaArrowRight />
        </FlatButton>
      </Form>
    </Card>
  );
};

export default LoginCard;
