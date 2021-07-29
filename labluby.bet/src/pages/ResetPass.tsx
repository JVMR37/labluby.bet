import TitleAppComponent from "../components/TitleAppComponent";
import TitlePageComponent from "../components/TitlePageComponent";
import {
  Row,
  Column,
  FlatButton,
  CenteredPageDiv,
  DivButton,
} from "../GlobalStyles";
import ResetPassCard from "../components/ResetPassCard";
import { FaArrowLeft } from "react-icons/fa";
import { useHistory } from "react-router-dom";

const ResetPass: React.FC = (props) => {
  const history = useHistory();

  const handleBackButton = () => {
    history.replace("/login");
  };

  return (
    <CenteredPageDiv>
      <Row>
        <Column margin="0px 5rem">
          <TitleAppComponent></TitleAppComponent>
        </Column>
        <Column margin="0px 5rem">
          <TitlePageComponent title="Reset Password" />
          <ResetPassCard />
          <DivButton>
            <FlatButton isPrimary={false} onClick={handleBackButton}>
              <FaArrowLeft />
              Back
            </FlatButton>
          </DivButton>
        </Column>
      </Row>
    </CenteredPageDiv>
  );
};

export default ResetPass;
