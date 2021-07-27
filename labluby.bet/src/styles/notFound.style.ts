import styled from "styled-components";

export const NotFoundSpan = styled.span`
  text-align: center;
  align-items: center;
  align-self: center;
  font: italic normal bold 4rem Helvetica;
  letter-spacing: 0px;
  color: ${({ theme }) => theme.colors.secondary};
  opacity: 1;

  display: inline-block;
  vertical-align: middle;
  line-height: normal;
`;
