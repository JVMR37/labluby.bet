import styled from "styled-components";

const ErrotInputTextStyled = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-style: italic;
  font-size: 1.5rem;
  margin: 0rem 0.7rem 1rem 0.7rem;
  color: ${({ theme }) => theme.colors.error};
`;

export default ErrotInputTextStyled;
