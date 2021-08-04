import styled from "styled-components";
import { highlightAnimation } from "./animatedDiv.style";

export const RecentGameStyledColumn = styled.div`
  ${highlightAnimation}
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  align-items: flex-start;
`;

export const GameStyledDiv = styled.div<{
  borderColor: string;
}>`
  display: flex;
  flex-direction: column;
  max-width: 70%;
  flex-wrap: wrap;
  word-break: break-all;
  word-wrap: break-word;
  padding: 0.6rem;
  border-bottom-left-radius: 0.25rem;
  border-top-left-radius: 0.25rem;
  border-left: 4px solid ${({ borderColor }) => borderColor};
  margin: 1rem 2rem;
`;

export const NumbersStyledSpan = styled.span`
  display: flex;
  flex-wrap: wrap;
  word-wrap: break-word;
  white-space: wrap;
  font: italic normal bold 1.9rem Helvetica;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const GameDatePriceRow = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
`;

export const NameGameStyledSpan = styled.span<{
  fontColor: string;
}>`
  display: flex;
  padding: 0.4rem 0.6rem 0rem 0;
  text-align: center;
  font: italic normal bold 1.9rem Helvetica;
  letter-spacing: 0px;
  color: ${({ fontColor }) => fontColor};
  text-transform: uppercase;
`;

export const DatePriceStyledSpan = styled.span`
  display: flex;

  text-align: center;
  padding: 0.4rem 0.6rem 0rem 0;
  margin: 0.7rem 0rem;

  font: normal normal normal 1.9rem Helvetica;
  color: #868686;
`;

export const NoGamesStyledDiv = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-evenly;
  align-items: center;

  margin: 5rem 0rem;

  width: 100%;
  height: 100%;
`;

export const NoGamesStyledSpan = styled.span`
  text-align: center;
  width: 100%;

  font: normal normal 300 2rem Helvetica;
  letter-spacing: 0px;
  color: ${({ theme }) => theme.colors.secondary};
  text-transform: uppercase;
`;

export const NoGamesBoldStyledSpan = styled.span`
  text-align: center;
  width: 100%;

  margin: 1rem 0rem;

  font: normal normal bold 2rem Helvetica;
  letter-spacing: 0px;
  color: ${({ theme }) => theme.colors.secondary};
  text-transform: uppercase;
`;
