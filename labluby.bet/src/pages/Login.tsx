import TitleAppComponent from "../components/TitleAppComponent";
import TitlePageComponent from "../components/TitlePageComponent";
import {
  Row,
  Column,
  FlatButton,
  CenteredPageDiv,
  DivButton,
} from "../GlobalStyles";
import LoginCard from "../components/LoginCard";
import { FaArrowRight } from "react-icons/fa";
import { useHistory } from "react-router-dom";

const Login: React.FC = (props) => {
  const history = useHistory();

  const handleSignoutButton = () => {
    history.push("/register");
  };

  return (
    <CenteredPageDiv>
      <Row>
        <Column margin="0px 5rem">
          <TitleAppComponent></TitleAppComponent>
        </Column>
        <Column margin="0px 5rem">
          <TitlePageComponent title="Authentication" />
          <LoginCard />
          <DivButton>
            <FlatButton isPrimary={false} onClick={handleSignoutButton}>
              Sign Up <FaArrowRight />
            </FlatButton>
          </DivButton>
        </Column>
      </Row>
    </CenteredPageDiv>
  );
};

export default Login;
