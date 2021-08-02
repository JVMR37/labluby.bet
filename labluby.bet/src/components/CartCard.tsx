import { useCallback } from "react";
import Card from "../layout/Card";
import { Column, Row, FlatButton } from "../GlobalStyles";
import CartItemComponent from "./CartItemComponent";
import { FaArrowRight } from "react-icons/fa";

import {
  CartStyledDivContent,
  CartTitleStyledSpan,
  TotalPriceStyledSpan,
  SaveCartStyledDiv,
  NoItensSpan,
} from "../styles/cartCard.style";

import { useAppSelector } from "../hooks/hooks";
import { selectCartItens, selectCartTotalPrice } from "../store/cartSlice";

const CartCard: React.FC = (props) => {
  const cartItens = useAppSelector(selectCartItens);
  const cartTotalPrice = useAppSelector(selectCartTotalPrice);

  const cartContent = useCallback(() => {
    if (cartItens.length > 0) {
      return cartItens.map((cartItem) => {
        return (
          <CartItemComponent
            key={cartItem.id}
            gameColor={cartItem.typeGame.color}
            gameName={cartItem.typeGame.type}
            gamePrice={cartItem.typeGame.price}
            selectedNumbers={cartItem.selectedNumbers}
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
          <TotalPriceStyledSpan>TOTAL: R${cartTotalPrice}</TotalPriceStyledSpan>
        </div>

        <SaveCartStyledDiv>
          <FlatButton isPrimary>
            Save <FaArrowRight />
          </FlatButton>
        </SaveCartStyledDiv>
      </CartStyledDivContent>
    </Card>
  );
};

export default CartCard;
