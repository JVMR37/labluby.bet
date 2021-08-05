import styled from "styled-components";

export const GameNumbersStyledContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: baseline;
  margin: 3rem auto;

`;

export const GameNumberButton = styled.button<{
  isSelected?: boolean;
  gameColor: string;
  needsMoreMargin?: boolean;
}>`
  display: flex;
  flex: 0 0 9%;
  background-color: ${({ isSelected, gameColor, theme }) =>
    isSelected ? gameColor : theme.colors.gameNumbers};
  color: #ffffff;
  font-size: 24px;
  font-weight: bold;
  border-radius: 32px;
  margin-right: ${({ needsMoreMargin }) => (needsMoreMargin ? "16px" : "8px")};
  margin-bottom: 16px;
  min-width: 55px;
  min-height: 55px;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
    color: white;
  }

  @media only screen and (max-width: 1000px) {
    margin-right: 8px;
  }
`;
