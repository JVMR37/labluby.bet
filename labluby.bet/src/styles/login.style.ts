import styled from "styled-components";

export const LoginContentStyledDiv = styled.div`
  display: flex;
  flex-flow: row wrap;

  justify-content: space-around;
  align-items: center;
  height: 85vh;

  @media only screen and (max-width: 1000px) {
    flex-flow: column wrap;
    height: inherit;

    justify-content: flex-start !important;
  }
`;

export const LoginContentColumnStyledDiv = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 25%;
  /* height: 100%; */
  /* justify-content: center; */

  margin: 3rem 0rem;

  @media only screen and (max-width: 1000px) {
    width: inherit;
  }
`;
