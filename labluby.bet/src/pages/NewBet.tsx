import { CenteredPageDiv, Column, Row } from "../GlobalStyles";
import CartCard from "../components/CartCard";

const NewBet: React.FC = () => {
  //TODO: Implement NewBet Page
  return (
    <CenteredPageDiv>
      <Row>
        <Column width="70%" margin="0px 5rem"></Column>
        <Column width="30%" margin="0px 5rem">
          <CartCard />
        </Column>
      </Row>
    </CenteredPageDiv>
  );
};

export default NewBet;
