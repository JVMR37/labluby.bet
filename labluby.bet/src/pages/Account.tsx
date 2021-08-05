import { CenteredPageDiv, FlatButton } from "../GlobalStyles";

import AccountCard from "../components/AccountCard";
import TitlePageComponent from "../components/TitlePageComponent";
import { FaArrowLeft } from "react-icons/fa";
import { useHistory } from "react-router-dom";

import { AccountPageDiv } from "../styles/account.style";

const Account: React.FC = (props) => {
  const history = useHistory();

  const handleBackButton = () => {
    history.goBack();
  };

  return (
    <AccountPageDiv>
      <TitlePageComponent title={"Account"} />
      <AccountCard />
      <FlatButton isPrimary={false} onClick={handleBackButton}>
        <FaArrowLeft />
        Back
      </FlatButton>
    </AccountPageDiv>
  );
};

export default Account;
