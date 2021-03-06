import styled from "styled-components";
import { OutlineButton, FlatButton } from "../GlobalStyles";

export const HomeRow = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  align-content: flex-start;
  width: 100%;

  @media only screen and (max-width: 1000px) {
    flex-flow: column wrap;
    align-items: flex-start;
  }
`;

export const RecentGameStyledSpan = styled.span`
  display: flex;
  flex: 2;
  justify-self: flex-start;
  font: italic normal bold 3rem Helvetica;
  color: ${({ theme }) => theme.colors.secondary};
  text-transform: uppercase;
`;

export const FilterStyledSpan = styled.span`
  display: flex;
  font: italic normal normal 2rem Helvetica;
  letter-spacing: 0px;
  color: #868686;
`;

export const FilterStyledDiv = styled.div`
  display: flex;
  flex: 4;
  flex-flow: row wrap;
  margin: 2rem;

  justify-content: space-around;
  align-content: center;
  align-items: center;

  @media only screen and (max-width: 1000px) {
    margin: 2rem 0rem;

    justify-content: flex-start;
  }
`;

export const GameFilterRowStyledDiv = styled.div`
  display: flex;
  flex-flow: row wrap;

  
  justify-content: space-around;
  /* align-content: space-around; */
  align-items: center;
  
  @media only screen and (max-width: 1000px) {
    margin: 2rem 0rem 0rem 0rem;
    width: 100%;
    justify-content: flex-start;
  }
`;

export const NewBetStyledDiv = styled.div`
  display: flex;
  flex: 2;
  justify-self: flex-end;
  justify-content: flex-end;
  align-items: flex-start;

  @media only screen and (max-width: 1000px) {
    justify-content: flex-start !important;
  }
`;

export const NewBetStyledButton = styled(FlatButton)`
  width: inherit;
`;

export const FilterGameStyledButton = styled(OutlineButton)<{
  gameColor: string;
  isSelected?: boolean;
}>`
  display: flex;
  flex: 1;
  justify-content: center;

  padding: 1rem;
  margin: 0.5rem;
  min-width: 13rem;
  max-width: 13rem;

  border: 2px solid ${({ gameColor }) => gameColor};
  border-radius: 50rem;

  color: ${({ gameColor, isSelected }) => (isSelected ? "white" : gameColor)};
  background-color: ${({ gameColor, isSelected, theme }) =>
    isSelected ? gameColor : theme.colors.background};
  font-weight: ${({ isSelected }) => (isSelected ? "bold" : "normal")};

  &:hover {
    background-color: ${({ gameColor }) => gameColor};
    color: white;
  }
`;
