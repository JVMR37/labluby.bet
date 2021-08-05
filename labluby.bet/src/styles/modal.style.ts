import styled from "styled-components";

export const ModalTitleStyledSpan = styled.span`

`;

export const ModalCloseStyledButton = styled.button<{
  color: string;
  backgroundColor: string;
}>`
  border: 2px solid ${({ color }) => color};
  border-radius: 50rem;
  color: ${({ color }) => color};
  outline: none;
  padding: 1rem 1rem;
  font-size: 18px;
  transition: all 0.2s ease;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    background-color: ${({ color }) => color};
    color: white;
    font-weight: bold;
    transform: translateY(-0.5rem) scale(1.02);
  }

  &:active {
    transform: translateY(0.5rem);
  }
`;
