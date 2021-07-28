import Card from "../layout/Card";
import { FlatButton, StyledForm } from "../GlobalStyles";
import { FaArrowRight } from "react-icons/fa";

import React from "react";

const RegisterCard: React.FC = () => {
  return (
    <Card>
      <StyledForm>
        <input placeholder="Name"></input>
        <hr />

        <input placeholder="Email"></input>
        <hr />

        <input placeholder="Password"></input>
        <hr />

        <FlatButton isPrimary>
          Register <FaArrowRight />
        </FlatButton>
      </StyledForm>
    </Card>
  );
};

export default RegisterCard;
