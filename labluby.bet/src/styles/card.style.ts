import styled from "styled-components";
import { highlightAnimation } from "./animatedDiv.style";
export const StyledCard = styled.div`
  ${highlightAnimation}
  background: ${({ theme }) => theme.colors.card} 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 25px #00000014;
  border: 1px solid #dddddd;
  border-radius: 15px;
  opacity: 1;
  padding: 0px;

  position: relative;

  display: inline-block;
  justify-content: center;
  align-items: center;

  transition: all 0.5s ease;
`;
