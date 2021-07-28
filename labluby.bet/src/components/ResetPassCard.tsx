import React from "react";

import Card from "../layout/Card";
import { FlatButton, StyledForm } from "../GlobalStyles";
import { FaArrowRight } from "react-icons/fa";

const ResetPassCard: React.FC = () => {
  return (
    <Card>
      <StyledForm>
        <input placeholder="Email"></input>
        <hr />

        <FlatButton isPrimary>
          Send link <FaArrowRight />
        </FlatButton>
      </StyledForm>
    </Card>
  );
};

export default ResetPassCard;
