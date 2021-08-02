import CartCard from "../components/CartCard";
import NewBetComponent from "../components/NewBetComponent";
import { NewBetStyledRow, CartCardStyledColumn } from "../styles/newBet.style";

const NewBet: React.FC = () => {
  return (
    <NewBetStyledRow>
      <NewBetComponent />
      <CartCardStyledColumn>
        <CartCard />
      </CartCardStyledColumn>
    </NewBetStyledRow>
  );
};

export default NewBet;
