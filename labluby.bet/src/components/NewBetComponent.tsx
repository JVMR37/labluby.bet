import { Row, Column } from "../GlobalStyles";
import {
  NewBetStyledTitle,
  GameStyledButton,
} from "../styles/newBetComponent.style";
const NewBetComponent: React.FC = (props) => {
  return (
    <Column>
      <NewBetStyledTitle>
        New Bet
        <span>{"for game tal"}</span>
      </NewBetStyledTitle>

      <span>Choose a game</span>

      <Row>
        <GameStyledButton gameColor={"red"}>Jogo</GameStyledButton>
      </Row>

      <span>Fill your bet</span>
      <span>Description</span>
    </Column>
  );
};

export default NewBetComponent;
