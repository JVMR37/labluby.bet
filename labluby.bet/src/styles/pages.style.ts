import styled from "styled-components";

export const PageContentStyledDiv = styled.div`
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

export const PageContentColumnStyledDiv = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 25%;

  margin: 3rem 0rem;

  @media only screen and (max-width: 1000px) {
    width: inherit;
  }
`;
