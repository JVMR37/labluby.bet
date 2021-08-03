import styled from "styled-components";

export const RecentGameStyledColumn = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  align-items: flex-start;
`;

export const GameStyledDiv = styled.div<{
  borderColor: string;
}>`
  flex: 3;
  display: flex;
  min-width: 0;
  min-height: 0;
  flex-wrap: wrap;
  word-break: break-all;
  word-wrap: break-word;
  padding: 0.6rem;
  border-bottom-left-radius: 0.25rem;
  border-top-left-radius: 0.25rem;
  border-left: 4px solid ${({ borderColor }) => borderColor};
`;

export const NumbersStyledSpan = styled.span`
  display: flex;
  flex-wrap: wrap;
  word-wrap: break-word;
  white-space: wrap;
  font: italic normal bold 1.9rem Helvetica;
  color: ${({ theme }) => theme.colors.secondary};
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

export const PriceStyledSpan = styled.span`
  display: flex;

  text-align: center;
  padding: 0.4rem 0.6rem 0rem 0;

  font: normal normal normal 1.9rem Helvetica;
  color: #868686;
`;
