import Card from "../layout/Card";
import { FlatButton } from "../GlobalStyles";
import { FaArrowRight } from "react-icons/fa";

import React from "react";
import styled from "styled-components";

const RegisterCard: React.FC = () => {
  const Form = styled.form`
    padding-top: 10px;
    /* padding-bottom: 10px; */
  `;

  return (
    <Card>
      <Form>
        <input placeholder="Name"></input>
        <hr />

        <input placeholder="Email"></input>
        <hr />

        <input placeholder="Password"></input>
        <hr />

        <FlatButton isPrimary>
          Register <FaArrowRight />
        </FlatButton>
      </Form>
    </Card>
  );
};

export default RegisterCard;
