import styled from "styled-components";

export const StyledCard = styled.div`
  background: ${({ theme }) => theme.colors.card} 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 25px #00000014;
  border: 1px solid #dddddd;
  border-radius: 14px;
  opacity: 1;
  padding: 0px;

  position: relative;

  display: inline-block;
  justify-content: center;
  align-items: center;
`;