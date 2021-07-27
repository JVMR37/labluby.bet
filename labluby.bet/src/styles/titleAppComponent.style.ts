import styled from "styled-components";

export const TitleSpan = styled.span`
  text-align: center;
  align-items: center;
  align-self: center;
  font: italic normal bold 7rem Helvetica;
  letter-spacing: 0px;
  color: ${({ theme }) => theme.colors.secondary};
  opacity: 1;

  display: inline-block;
  vertical-align: middle;
  line-height: normal;
`;

export const GreenDiv = styled.div`
  background: ${({ theme }) => theme.colors.main} 0% 0% no-repeat padding-box;
  border-radius: 100px;
  opacity: 1;
  display: inline-block;
  padding: 1rem 5rem;
  margin: 2rem;
  text-align: center;
  font: italic normal bold 22px Helvetica;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
`;

export const LotterySpan = styled.span`
  text-align: center;
  align-items: center;
  align-self: center;
  font: italic normal bold 7rem Helvetica;
  letter-spacing: 0px;
  color: ${({ theme }) => theme.colors.secondary};
  opacity: 1;

  display: inline-block;
  vertical-align: middle;
  line-height: normal;
`;
