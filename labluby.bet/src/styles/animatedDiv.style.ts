import styled, { css, keyframes } from "styled-components";

const highlight = keyframes`
0% {
  opacity: 0
}

25% {
  opacity: 1
  transform: scale(0.95);
}

100% {
  opacity: 1
  transform: scale(1.0);
}
`;

const highlightAnimation = css`
  animation: ${highlight} 0.8s ease-in-out;
`;

const AnimatedDivStyled = styled.div`
  ${highlightAnimation}

  margin: 3rem 0rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  transition: all 1.5s ease;
`;

export default AnimatedDivStyled;
