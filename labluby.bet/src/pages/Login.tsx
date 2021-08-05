import TitleAppComponent from "../components/TitleAppComponent";
import TitlePageComponent from "../components/TitlePageComponent";
import { FlatButton, DivButton } from "../GlobalStyles";
import LoginCard from "../components/LoginCard";
import {
  PageContentColumnStyledDiv,
  PageContentStyledDiv,
} from "../styles/pages.style";
import { FaArrowRight } from "react-icons/fa";
import { useHistory } from "react-router-dom";

const Login: React.FC = () => {
  const history = useHistory();

  const handleSignoutButton = () => {
    history.push("/register");
  };

  return (
    <PageContentStyledDiv>
      <PageContentColumnStyledDiv>
        <TitleAppComponent />
      </PageContentColumnStyledDiv>
      <PageContentColumnStyledDiv>
        <TitlePageComponent title="Authentication" />
        <LoginCard />
        <DivButton>
          <FlatButton isPrimary={false} onClick={handleSignoutButton}>
            Sign Up <FaArrowRight />
          </FlatButton>
        </DivButton>
      </PageContentColumnStyledDiv>
    </PageContentStyledDiv>
  );
};

export default Login;
