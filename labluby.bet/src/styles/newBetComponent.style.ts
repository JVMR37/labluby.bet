import styled from "styled-components";
import { OutlineButton, Button } from "../GlobalStyles";

export const NewBetContentStyledColumn = styled.div`
  display: flex;
  flex: 6 6;
  flex-flow: column wrap;
  padding-right: 3rem;
`;

export const NewBetStyledTitle = styled.div`
  text-align: start;
  font: italic normal bold 3rem Helvetica;
  letter-spacing: 0px;
  color: ${({ theme }) => theme.colors.secondary};
  text-transform: uppercase;
  margin-top: 2.7rem;
  margin-bottom: 3rem;
  padding: 0;

  span:nth-child(1) {
    text-align: center;
    font: italic normal 300 3rem Helvetica;
    letter-spacing: 0px;
    text-transform: uppercase;
  }
`;

export const ChooseGameStyledSpan = styled.span`
  text-align: start;
  font: italic normal bold 2rem Helvetica;
  letter-spacing: 0px;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 2rem;
`;

export const TypeGameButtonStyledRow = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  align-content: flex-start;
  margin-bottom: 2rem;

  @media only screen and (max-width: 1000px) {
    justify-content: start;
  }
`;

export const GameStyledButton = styled(OutlineButton)<{
  gameColor: string;
  isSelected?: boolean;
}>`
  width: 13rem;
  padding: 1rem;
  margin: 1rem 1rem;

  border: 2px solid ${({ gameColor }) => gameColor};
  border-radius: 50rem;

  color: ${({ gameColor, isSelected }) => (isSelected ? "white" : gameColor)};
  background-color: ${({ gameColor, isSelected, theme }) =>
    isSelected ? gameColor : theme.colors.background};
  font-weight: ${({ isSelected }) => (isSelected ? "bold" : "normal")};

  pointer-events: ${({ isSelected }) => (isSelected ? "none" : "all")};

  &:hover {
    background-color: ${({ gameColor }) => gameColor};
    color: white;
  }

  @media only screen and (max-width: 1000px) {
    /* width: 10rem; */
  }
`;

export const DescriptionTitleStyledSpan = styled.span`
  text-align: left;
  font: italic normal bold 2rem Helvetica;
  letter-spacing: 0px;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const DescriptionGameStyledSpan = styled.span`
  text-align: left;
  letter-spacing: 0px;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const GameActionsStyledRow = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  align-content: flex-start;
  padding: 1px;
  margin: 2rem 0rem;

  @media only screen and (max-width: 1000px) {
    justify-content: flex-start !important;
    flex: inherit;
  }
`;

export const GameActionStyledButton = styled(OutlineButton)`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  border-radius: 50rem;
  padding: 1rem 2rem;
  margin: 1rem 1rem;

  @media only screen and (max-width: 1000px) {
    flex: inherit;
  }
`;

export const CartButtonStyledDiv = styled.div`
  display: flex;
  flex: 2;
  padding: 5px;
  justify-self: flex-end;
  justify-content: flex-end;
  align-items: flex-start;

  @media only screen and (max-width: 1000px) {
    justify-content: flex-start !important;
    flex: inherit;
  }
`;

export const AddToCartStyledButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;

  /* width: 13rem; */
  padding: 1rem 3rem;
  margin: 1rem 1rem;
`;
