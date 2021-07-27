import styled from "styled-components";

const ErrotInputTextStyled = styled.span`
  font-style: italic;
  font-size: 1.5rem;
  margin-left: 2rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.error};
`;

export default ErrotInputTextStyled;
