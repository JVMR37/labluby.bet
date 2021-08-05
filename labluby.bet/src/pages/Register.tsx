import TitleAppComponent from "../components/TitleAppComponent";
import TitlePageComponent from "../components/TitlePageComponent";
import { FlatButton, DivButton } from "../GlobalStyles";
import RegisterCard from "../components/RegisterCard";
import { FaArrowLeft } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import {
  PageContentColumnStyledDiv,
  PageContentStyledDiv,
} from "../styles/pages.style";


const Register: React.FC = () => {
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
        <TitlePageComponent title="Registration" />
        <RegisterCard />
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

export default Register;
