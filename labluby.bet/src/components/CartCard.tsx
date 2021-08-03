import { useCallback } from "react";
import Card from "../layout/Card";
import { FlatButton } from "../GlobalStyles";
import CartItemComponent from "./CartItemComponent";
import { FaArrowRight } from "react-icons/fa";

import {
  CartStyledDivContent,
  CartTitleStyledSpan,
  TotalPriceStyledSpan,
  SaveCartStyledDiv,
  NoItensSpan,
} from "../styles/cartCard.style";

import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import {
  selectCartItens,
  selectCartTotalPrice,
  clearCart,
} from "../store/cartSlice";
import { saveGames } from "../store/gamesSlice";

const CartCard: React.FC = (props) => {
  const dispatch = useAppDispatch();
  const cartItens = useAppSelector(selectCartItens);
  const cartTotalPrice = useAppSelector(selectCartTotalPrice);

  const saveButtonHandler = useCallback(
    (event: any) => {
      event.preventDefault();
      dispatch(saveGames(cartItens));
      dispatch(clearCart());
    },
    [cartItens, dispatch]
  );

  const cartContent = useCallback(() => {
    if (cartItens.length > 0) {
      return cartItens.map((cartItem) => {
        return (
          <CartItemComponent
            key={cartItem.id}
            cartItemId={cartItem.id}
            gameColor={cartItem.typeGame.color}
            gameName={cartItem.typeGame.type}
            gamePrice={cartItem.typeGame.price}
            selectedNumbers={cartItem.selectedNumbers.join(", ") + "."}
          ></CartItemComponent>
        );
      });
    } else {
      return (
        <NoItensSpan>There are no games added to the cart : (</NoItensSpan>
      );
    }
  }, [cartItens])();

  return (
    <Card>
      <CartStyledDivContent>
        <CartTitleStyledSpan>Cart</CartTitleStyledSpan>

        {cartContent}

        <div>
          <CartTitleStyledSpan>Cart </CartTitleStyledSpan>
          <TotalPriceStyledSpan>
            TOTAL: R${cartTotalPrice.toFixed(2)}
          </TotalPriceStyledSpan>
        </div>

        <SaveCartStyledDiv>
          <FlatButton isPrimary onClick={saveButtonHandler}>
            Save <FaArrowRight />
          </FlatButton>
        </SaveCartStyledDiv>
      </CartStyledDivContent>
    </Card>
  );
};

export default CartCard;
