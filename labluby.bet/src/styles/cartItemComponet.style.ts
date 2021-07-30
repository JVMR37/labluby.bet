import styled from "styled-components";

export const CartItemStyledDiv = styled.div`
  display: flex;

  width: 100%;

  &:after {
    content: "";
    display: table;
    clear: both;
  }
`;

export const GameStyledDiv = styled.div<{
  borderColor: string;
}>`
  width: 75%;
  display: block;
  word-wrap: break-word;
  padding: 0.6rem;
  border-bottom-left-radius: 0.25rem;
  border-top-left-radius: 0.25rem;
  border-left: 4px solid ${({ borderColor }) => borderColor};
`;

export const NumbersStyledSpan = styled.span`
  text-align: justify;
  display: flex;
  /* overflow: auto; */
  word-wrap: wrap;
  flex-wrap: wrap;
  font: italic normal bold 1.9rem Helvetica;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const NameGameStyledSpan = styled.span<{
  fontColor: string;
}>`
  text-align: center;
  font: italic normal bold 1.9rem Helvetica;
  letter-spacing: 0px;
  color: ${({ fontColor }) => fontColor};
  text-transform: uppercase;
`;

export const PriceStyledSpan = styled.span`
  text-align: justify;
  font: normal normal normal 1.9rem Helvetica;
  color: #868686;
`;

export const DeleteButtonStyledDiv = styled.div`
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  width: 25%;
`;
