import Card from "../layout/Card";
import { FlatButton } from "../GlobalStyles";
import { FaArrowRight } from "react-icons/fa";

import React from "react";
import styled from "styled-components";

interface IProps extends React.HTMLProps<HTMLInputElement> {}

const LoginCard: React.FC = () => {
  const aloha: IProps = {
    placeholder: "email",
  };

  const Form = styled.form`
    padding-top: 10px;
    /* padding-bottom: 10px; */
  `;

  return (
    <Card>
      <Form>
        <input placeholder="Email"></input>

        <hr />
        <input placeholder="Password"></input>

        <hr />

        <FlatButton isPrimary>Log In <FaArrowRight/></FlatButton>
      </Form>
    </Card>
  );
};

export default LoginCard;
