import TitleAppComponent from "../components/TitleAppComponent";
import TitlePageComponent from "../components/TitlePageComponent";
import { FlatButton, DivButton } from "../GlobalStyles";
import { FaArrowLeft } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import {
  PageContentColumnStyledDiv,
  PageContentStyledDiv,
} from "../styles/pages.style";
import React from "react";
import UpdatePassCard from "../components/UpdatePassCard";

const UpdatePass: React.FC = () => {
  const history = useHistory();

  const handleBackButton = () => {
    history.replace("/login");
  };

  return (
    <PageContentStyledDiv>
      <PageContentColumnStyledDiv>
        <TitleAppComponent />
      </PageContentColumnStyledDiv>
      <PageContentColumnStyledDiv>
        <TitlePageComponent title="Reset Password" />
        <UpdatePassCard />
        <DivButton>
          <FlatButton isPrimary={false} onClick={handleBackButton}>
            <FaArrowLeft />
            Back
          </FlatButton>
        </DivButton>
      </PageContentColumnStyledDiv>
    </PageContentStyledDiv>
  );
};

export default UpdatePass;
