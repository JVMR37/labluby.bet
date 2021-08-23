import { useCallback, useMemo } from "react";
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
  MinCartPricesWarningSpan,
  CartTitleStyledDiv,
  TotalPriceStyledDiv,
  CartItensStyledDiv,
  TotalPriceValueStyledSpan,
} from "../styles/cartCard.style";

import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import {
  selectCartItens,
  selectCartTotalPrice,
  clearCart,
  selectMinCartValue,
} from "../store/cartSlice";
import { saveBets } from "../store/gamesSlice";
import { ModalCloseStyledButton } from "../styles/modal.style";
import { useMySwal } from "../hooks/use-swal";
import { appTheme } from "../utils/appTheme";

import { useHistory } from "react-router-dom";

const CartCard: React.FC = (props) => {
  const dispatch = useAppDispatch();
  const cartItens = useAppSelector(selectCartItens);
  const cartTotalPrice = useAppSelector(selectCartTotalPrice);
  const minCartTotalPrice = useAppSelector(selectMinCartValue);
  const mySwal = useMySwal();
  const history = useHistory();

  const showWarning = useMemo(
    () => minCartTotalPrice !== 0 && cartTotalPrice < minCartTotalPrice,
    [cartTotalPrice, minCartTotalPrice]
  );

  const saveButtonHandler = useCallback(
    async (event: any) => {
      event.preventDefault();
      const result = await dispatch(saveBets(cartItens));

      if (result.meta.requestStatus === "fulfilled") {
        dispatch(clearCart());

        mySwal
          .fire({
            title: "Your games have been successfully saved!",
            icon: "success",
            background: appTheme.colors.background,
            footer: (
              <ModalCloseStyledButton
                color={appTheme.colors.main}
                backgroundColor={appTheme.colors.background}
                onClick={mySwal.clickConfirm}
              >
                Back
              </ModalCloseStyledButton>
            ),
            showConfirmButton: false,
          })
          .then(() => history.replace("/home"));
      } else {
        mySwal.fire({
          title: "Failed to save your bets : (",
          icon: "error",
          background: appTheme.colors.background,
          footer: (
            <ModalCloseStyledButton
              color={appTheme.colors.main}
              backgroundColor={appTheme.colors.background}
              onClick={mySwal.clickConfirm}
            >
              Back
            </ModalCloseStyledButton>
          ),
          showConfirmButton: false,
        });
      }
    },
    [cartItens, dispatch, history, mySwal]
  );

  const cartContent = useCallback(() => {
    if (cartItens.length > 0) {
      return cartItens.map((cartItem) => {
        return (
          <CartItemComponent
            key={cartItem.id}
            cartItemId={cartItem.id}
            gameColor={cartItem.betType.color}
            gameName={cartItem.betType.type}
            gamePrice={cartItem.betType.price}
            selectedNumbers={cartItem.numbers.join(", ") + "."}
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
        <CartTitleStyledDiv>
          <CartTitleStyledSpan>Cart</CartTitleStyledSpan>
        </CartTitleStyledDiv>

        <CartItensStyledDiv>{cartContent}</CartItensStyledDiv>

        <TotalPriceStyledDiv>
          <CartTitleStyledSpan>Cart </CartTitleStyledSpan>
          <TotalPriceStyledSpan>
            TOTAL: R$
            <TotalPriceValueStyledSpan hasError={showWarning}>
              {" " + cartTotalPrice.toFixed(2)}
              {showWarning && "*"}
            </TotalPriceValueStyledSpan>
          </TotalPriceStyledSpan>
        </TotalPriceStyledDiv>
        {showWarning && (
          <MinCartPricesWarningSpan>
            *Cart must be at least R${minCartTotalPrice.toFixed(2)} to save
          </MinCartPricesWarningSpan>
        )}

        <SaveCartStyledDiv>
          <FlatButton
            isPrimary
            onClick={saveButtonHandler}
            disabled={showWarning}
          >
            Save <FaArrowRight />
          </FlatButton>
        </SaveCartStyledDiv>
      </CartStyledDivContent>
    </Card>
  );
};

export default CartCard;
