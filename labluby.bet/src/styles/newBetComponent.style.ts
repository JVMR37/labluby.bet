import styled from "styled-components";
import { OutlineButton } from "../GlobalStyles";

export const NewBetStyledTitle = styled.div`
  text-align: start;
  font: italic normal bold 24px Helvetica;
  letter-spacing: 0px;
  color: ${({ theme }) => theme.colors.secondary};
  text-transform: uppercase;
  margin: 0;
  padding: 0;

  span:nth-child(1) {
    text-align: center;
    font: italic normal 300 24px Helvetica;
    letter-spacing: 0px;
    color: red;
    text-transform: uppercase;
  }
`;

export const GameStyledButton = styled(OutlineButton)<{
  gameColor: string;
  isSelected?: boolean;
}>`
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
`;
