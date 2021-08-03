import { IconButton } from "../GlobalStyles";
import { FaTrashAlt } from "react-icons/fa";
import {
  GameStyledDiv,
  NumbersStyledSpan,
  NameGameStyledSpan,
  PriceStyledSpan,
  DeleteButtonStyledDiv,
  CartItemStyledDiv,
} from "../styles/cartItemComponet.style";
import { useAppDispatch } from "../hooks/hooks";
import { removeItem } from "../store/cartSlice";
import { useCallback } from "react";

export interface CartItemProps {
  cartItemId: number;
  gameColor: string;
  selectedNumbers: string;
  gameName: string;
  gamePrice: number;
}

const CartItemComponent: React.FC<CartItemProps> = (props) => {
  const dispatch = useAppDispatch();

  const removeButtonHandler = useCallback(
    (event: any) => {
      event.preventDefault();
      dispatch(removeItem(props.cartItemId));
    },
    [dispatch, props.cartItemId]
  );

  return (
    <CartItemStyledDiv>
      <DeleteButtonStyledDiv>
        <IconButton isDeleteButton={true} onClick={removeButtonHandler}>
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
