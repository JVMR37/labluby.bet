import Card from "../layout/Card";
import { Column, Row, FlatButton } from "../GlobalStyles";
import CartItemComponent from "./CartItemComponent";
import { FaArrowRight } from "react-icons/fa";

import {
  CartStyledDivContent,
  CartTitleStyledSpan,
  TotalPriceStyledSpan,
  SaveCartStyledDiv,
} from "../styles/cartCard.style";

const CartCard: React.FC = (props) => {
  return (
    <Card>
      <CartStyledDivContent>
        <CartTitleStyledSpan>Cart</CartTitleStyledSpan>
        <CartItemComponent
          key={"2"}
          gameColor="red"
          gameName="Test"
          gamePrice={100}
          selectedNumbers={[
            "1",
            "2",
            "3",
            "3",
            "3",
            "3",
            "3",
            "3",
            "3",
            "3",
            "3",
            "3",
            "3",
            "3",
            "3",
            "3",
            "3",
            "3",
            "3",
            "3",
            "3",
            "3",
            "3",
            "3",
            "3",
            "3",
            "3",
            "3",
            "3",
            "3",
            "3",
          ]}
        ></CartItemComponent>
        <div>
          <CartTitleStyledSpan>Cart </CartTitleStyledSpan>
          <TotalPriceStyledSpan>TOTAL: R$15.00</TotalPriceStyledSpan>
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
