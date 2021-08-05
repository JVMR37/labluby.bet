import styled from "styled-components";
import { highlightAnimation } from "./animatedDiv.style";

export const TitlePageSpan = styled.div`
  ${highlightAnimation}
  margin-bottom: 1rem;
  text-align: center;
  font: italic normal bold 3.5rem Helvetica;
  letter-spacing: 0px;
  color: ${({ theme }) => theme.colors.secondary};
  opacity: 1;
`;
