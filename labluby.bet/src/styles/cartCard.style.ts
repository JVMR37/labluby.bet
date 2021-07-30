import styled from "styled-components";
import Card from "../layout/Card";

export const CartStyledDivContent = styled.div`
  /* float: left; */
  width: 30rem;
  padding: 0rem;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const CartTitleStyledSpan = styled.span`
  text-align: start;
  font: italic normal bold 24px/85px Helvetica;
  letter-spacing: 0px;
  padding-left: 2rem;
  color: ${({ theme }) => theme.colors.secondary};
  text-transform: uppercase;
  opacity: 1;
`;

export const TotalPriceStyledSpan = styled.span`
  text-align: center;
  font: normal normal 300 24px/85px Helvetica;
  letter-spacing: 0px;
  color: ${({ theme }) => theme.colors.secondary};
  text-transform: uppercase;
`;

export const SaveCartStyledDiv = styled.div`
  width: 100%;
  padding: 2rem;
  background: #f4f4f4 0% 0% no-repeat padding-box;
  border: 1px solid #e2e2e2;
  opacity: 1;
  text-align: center;
  font: italic normal bold 35px/70px Helvetica;
  letter-spacing: 0px;
  /* color: #27c383; */
  opacity: 1;
`;
