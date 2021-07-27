import styled from "styled-components";

export const StyledFooter = styled.footer`
  position: fixed;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-top: 3px solid #ebebeb;
  background-color: ${({ theme }) => theme.colors.background};
  bottom: 0rem;
  left: 0;
  right: 0;
  text-align: center;
`;
