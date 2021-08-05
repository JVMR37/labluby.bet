import styled from "styled-components";
import { highlightAnimation } from "./animatedDiv.style";

export const CartStyledDivContent = styled.div`
  ${highlightAnimation}
  display: flex;
  flex-direction: column;
  width: 30rem;
  /* padding: 0rem; */
  transition: all 0.5s ease;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const CartTitleStyledDiv = styled.div`
  margin: 2.75rem 0rem;
`;

export const CartTitleStyledSpan = styled.span`
  text-align: start;
  font: italic normal bold 2.3rem Helvetica;
  letter-spacing: 0px;
  padding-left: 2rem;
  color: ${({ theme }) => theme.colors.secondary};
  text-transform: uppercase;
  opacity: 1;
`;

export const TotalPriceStyledDiv = styled.div`
  margin: 2.75rem 0rem 2.75rem;
`;

export const TotalPriceStyledSpan = styled.span`
  text-align: center;
  font: normal normal 300 2.3rem Helvetica;
  letter-spacing: 0px;
  color: ${({ theme }) => theme.colors.secondary};
  text-transform: uppercase;
`;

export const TotalPriceValueStyledSpan = styled.span<{
  hasError?: boolean;
}>`
  text-align: center;
  font: normal normal 300 2.3rem Helvetica;
  letter-spacing: 0px;
  color: ${({ theme, hasError }) =>
    hasError ? theme.colors.error : theme.colors.main};
  text-transform: uppercase;
`;

export const SaveCartStyledDiv = styled.div`
  width: 100%;
  padding: 2rem;
  background: #f4f4f4 0% 0% no-repeat padding-box;
  border: 1px solid #e2e2e2;
  border-radius: 0px 0px 15px 15px;
  opacity: 1;
  text-align: center;
  font: italic normal bold 35px/70px Helvetica;
  letter-spacing: 0px;
  opacity: 1;
`;

export const CartItensStyledDiv = styled.div`
  display: flex;
  overflow: auto;
  flex-direction: column;
  max-height: 40vh;
`;

export const NoItensSpan = styled.span`
  flex-direction: column;
  text-align: center;
  margin: 2rem 3rem;

  font: normal normal 300 1.5rem Helvetica;
  letter-spacing: 0px;
  color: ${({ theme }) => theme.colors.secondary};
  text-transform: uppercase;
`;

export const MinCartPricesWarningSpan = styled.span`
  flex-direction: column;
  text-align: center;
  margin: 0rem 3rem 2.5rem;

  font: normal italic normal 1.5rem Helvetica;
  letter-spacing: 0px;
  color: ${({ theme }) => theme.colors.error};
  text-transform: uppercase;
`;
