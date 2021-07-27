import Card from "../layout/Card";
import { FlatButton } from "../GlobalStyles";
import { FaArrowRight } from "react-icons/fa";

import React from "react";
import styled from "styled-components";

const ResetPassCard: React.FC = () => {
  const Form = styled.form`
    padding-top: 10px;
    /* padding-bottom: 10px; */
  `;

  return (
    <Card>
      <Form>
        <input placeholder="Email"></input>
        <hr />

        <FlatButton isPrimary>
          Send link <FaArrowRight />
        </FlatButton>
      </Form>
    </Card>
  );
};

export default ResetPassCard;
