import styled, { css, keyframes } from "styled-components";

export const ResetPasswordButton = styled.button`
  text-align: left;

  margin-top: 2rem;
  margin-bottom: 2rem;
  margin-right: 1rem;

  float: right;

  font: italic 17px Helvetica;
  letter-spacing: 0px;
  color: #c1c1c1;
  opacity: 1;
  background-color: transparent;
  cursor: pointer;
  outline: none;

  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: groove;
  border-bottom: 2px solid transparent;

  transition: all 0.5s ease;

  &:hover {
    filter: brightness(0.8);
    border-bottom: 2px solid ${({ theme }) => theme.colors.focus};
    transform: scale(1.02);
  }

  &:focus {
    filter: brightness(0.8);
    border-bottom: 2px solid ${({ theme }) => theme.colors.focus};
  }
`;

const highlight = keyframes`
  25% {
    transform: scale(1.3);
  }

  100% {
    transform: scale(1.0);
  }
`;

const highlightAnimation = css`
  animation: ${highlight} 1s ease;
`;

export const AnimatedDivContent = styled.div`
  ${highlightAnimation}

  margin: 3rem 0rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  transition: all 1.5s ease;
`;
