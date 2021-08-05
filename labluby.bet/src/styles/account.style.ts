import styled from "styled-components";
import { StyledCard } from "../styles/card.style";
import { highlightAnimation } from "./animatedDiv.style";

export const AccountPageDiv = styled.div`
  ${highlightAnimation}
  display: flex;
  flex-flow: column wrap;
  width: 100%;
  height: 100%;

  justify-content: center;
  align-items: center;
`;

export const AccountCardStyledDiv = styled(StyledCard)`
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 2rem;
  padding: 2rem 0rem;
  min-width: 30rem;
`;

export const InfoTitleStyledSpan = styled.span`
  display: flex;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.secondary};
  margin: 1rem 1rem 0px;
`;

export const InfoValueStyledSpan = styled.span`
  display: flex;
  margin: 1rem 0rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.main};

  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: groove;

  padding: 0rem 2rem 1rem 1rem;

  width: 100%;

  border-bottom: 2px solid ${({ theme }) => theme.colors.main};
`;