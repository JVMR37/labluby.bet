import TitleAppComponent from "../components/TitleAppComponent";
import TitlePageComponent from "../components/TitlePageComponent";
import { Row, Column, FlatButton, CenteredPageDiv } from "../GlobalStyles";
import RegisterCard from "../components/RegisterCard";
import { FaArrowLeft } from "react-icons/fa";
import { useHistory } from "react-router-dom";

const Register: React.FC = (props) => {
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
          <TitlePageComponent title="Registration" />
          <RegisterCard />
          <FlatButton isPrimary={false} onClick={handleBackButton}>
            <FaArrowLeft />
            Back
          </FlatButton>
        </Column>
      </Row>
    </CenteredPageDiv>
  );
};

export default Register;
