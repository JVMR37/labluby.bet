import { Row, IconButton } from "../GlobalStyles";
import { FaTrashAlt } from "react-icons/fa";
import {
  GameStyledDiv,
  NumbersStyledSpan,
  NameGameStyledSpan,
  PriceStyledSpan,
  DeleteButtonStyledDiv,
  CartItemStyledDiv,
} from "../styles/cartItemComponet.style";

export interface CartItemProps {
  gameColor: string;
  selectedNumbers: string;
  gameName: string;
  gamePrice: number;
}

const CartItemComponent: React.FC<CartItemProps> = (props) => {
  return (
    <CartItemStyledDiv>
      <DeleteButtonStyledDiv>
        <IconButton isDeleteButton={true}>
          <FaTrashAlt />
        </IconButton>
      </DeleteButtonStyledDiv>
      <GameStyledDiv borderColor={props.gameColor}>
        <NumbersStyledSpan>{props.selectedNumbers}</NumbersStyledSpan>
        <NameGameStyledSpan fontColor={props.gameColor}>
          {props.gameName}
        </NameGameStyledSpan>
        <PriceStyledSpan> R$ {props.gamePrice.toFixed(2)}</PriceStyledSpan>
      </GameStyledDiv>
    </CartItemStyledDiv>
  );
};

export default CartItemComponent;
