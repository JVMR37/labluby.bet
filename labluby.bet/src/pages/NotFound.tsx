import { CenteredDiv, FlatButton, Column } from "../GlobalStyles";
import { FaArrowLeft } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { NotFoundSpan } from "../styles/notFound.style";
import { useAppSelector } from "../hooks/hooks";
import { selectIsLoggedInValue } from "../store/authSlice";

const NotFound = () => {
  const history = useHistory();
  const isLoggedIn = useAppSelector(selectIsLoggedInValue);

  const handleBackButton = () => {
    history.replace(isLoggedIn ? "/home" : "/login");
  };

  return (
    <CenteredDiv>
      <Column>
        <NotFoundSpan>
          Oops...
          <br /> Page not found.
        </NotFoundSpan>
        <FlatButton isPrimary onClick={handleBackButton}>
          <FaArrowLeft />
          Return to {isLoggedIn ? "Home" : "Login"}
        </FlatButton>
      </Column>
    </CenteredDiv>
  );
};

export default NotFound;
