import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}

html {
    box-sizing: border-box;
    font-size: 62.5%;

    @media only screen and (max-width: 1200px){
        font-size: 58%;
    }
    @media only screen and (min-width: 1980px){
        font-size: 70%;
    }
}

body{
    /* font-family: 'Nunito', sans-serif; */
    font-weight: 400;
    line-height: 1.6;
    font-size: 1.6rem;
    margin: 0;
    background: #f7f7f7 0% 0% no-repeat padding-box;
    font-family: "Helvetica Neue", Helvetica;
    color: #333;

}

hr {
  color: #ebebeb;
  background-color: #ebebeb;
}

main {
  /* display: inline-block; */
  margin: 3rem auto;
  width: 90%;
  max-width: 90rem;
}

`;

export default GlobalStyles;

export const Container = styled.div`
  margin: 0 0;
  padding: 0 50px;
  max-width: 1300px;
  width: 100%;

  @media (max-width: 400px) {
    padding: 0 10px;
  }
  @media (max-width: 991px) {
    padding: 0 30px;
  }

  @media (min-width: 1500px) {
    max-width: 1500px;
  }

  @media (min-width: 1800px) {
    max-width: 1800px;
    padding: 0 100px;
  }
`;

export const CenteredDiv = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const CenteredPageDiv = styled.div`
  margin: 0;
  position: absolute;
  top: 45%;
  left: 50%;
  -ms-transform: translate(-45%, -45%);
  transform: translate(-50%, -50%);
`;

export const Column = styled.div<{
  margin?: string;
}>`
  float: left;
  width: 50%;
  margin: ${({ margin }) => (margin ? margin : "5rem")};

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const Row = styled.div`
  display: flex;
  /* align-items: stretch; */
  /* align-items: space-between; */
  width: 90%;

  &:after {
    content: "";
    display: table;
    clear: both;
  }
`;

export const StyledForm = styled.form`
  padding-top: 10px;
`;

export const StyledInput = styled.input`
  font-size: 1.8rem;
  padding: 10px;
  margin: 10px;
  background: transparent;
  outline: none;
  border: 2px solid transparent;
  border-radius: 15px;

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    /* font-size: 1.8rem; */
    font-weight: 500;
    -webkit-text-fill-color: ${({ theme }) => theme.colors.main};
    -webkit-box-shadow: 0 0 0 30px transparent
      /* ${({ theme }) => theme.colors.background} */ inset !important;
    transition: background-color 5000s ease-in-out 0s;
  }

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.main};
  }

  &::placeholder {
    color: #9d9d9d;
  }
`;

export const Button = styled.button<{
  bigRadius?: boolean;
  primary?: boolean;
  big?: boolean;
  bigFont?: boolean;
}>`
  border-radius: ${({ bigRadius }) => (bigRadius ? "30px" : "20px")};
  background-color: ${({ primary }) => (primary ? "#b5c401" : "#000")};
  color: ${({ primary }) => (primary ? "#000" : "#fff")};
  padding: ${({ big }) => (big ? "18px 30px" : "10px 28px")};
  font-size: ${({ bigFont }) => (bigFont ? "20px" : "18px")};
  outline: none;
  cursor: pointer;
  border: none;
  transition: all 0.5s ease;
  flex-direction: column;

  &:hover {
    background-color: ${({ primary }) => (primary ? "#fff" : "#b5c401")};
    transform: translateY(-0.5rem) scale(1.02);
    color: #000;
  }
  &:active {
    transform: translateY(0.5rem);
  }

  @media only screen and (max-width: 1000px) {
    /* width: 100%; */
    padding: ${({ big }) => (big ? "18px 30px" : "10px 20px")};
  }
  @media only screen and (max-width: 375px) {
    padding: ${({ big }) => (big ? "12px 20px" : "10px 20px")};
    font-size: ${({ bigFont }) => (bigFont ? "16px" : "18px")};
  }
`;

export const OutlineButton = styled.button<{
  bigRadius?: boolean;
  primary?: boolean;
  big?: boolean;
  bigFont?: boolean;
}>`
  border-radius: ${({ bigRadius }) => (bigRadius ? "40px" : "30px")};
  border: 2px solid #333;
  color: #333;
  outline: none;
  padding: ${({ big }) => (big ? "15px 60px" : "13px 55px")};
  font-size: ${({ bigFont }) => (bigFont ? "22px" : "18px")};
  transition: all 0.5s ease;
  background-color: #fefefe;

  &:hover {
    background-color: #333;
    color: #fff;
    border: none;
    transform: translateY(-0.5rem) scale(1.02);
  }
  &:active {
    transform: translateY(0.5rem);
  }

  @media only screen and (max-width: 1200px) {
    border-radius: ${({ bigRadius }) => (bigRadius ? "20px" : "18px")};
    padding: ${({ big }) => (big ? "9px 30px" : "8px 28px")};
    font-size: ${({ bigFont }) => (bigFont ? "18px" : "16px")};
  }
`;

export const FlatButton = styled.button<{
  isPrimary?: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-weight: bold;
  color: ${({ isPrimary, theme }) =>
    isPrimary ? theme.colors.main : theme.colors.secondary};
  font-size: 3.5rem;
  font-family: Helvetica;
  cursor: pointer;

  margin: 3rem 0rem;

  /* height: 100%; */
  width: 100%;
  outline: none;
  background-color: transparent;
  border: none;

  & svg {
    margin-left: 5px;
    margin-right: 5px;
  }

  &:disabled,
  &[disabled] {
    filter: brightness(0.6);
    transition: color 5000s ease-in-out 0s;
  }

  &:not(&[disabled]):hover {
    filter: ${({ isPrimary, theme }) =>
      isPrimary ? "brightness(0.9)" : theme.colors.main};
    color: ${({ isPrimary, theme }) => !isPrimary && theme.colors.main};
    transform: traslateY(-3rem);
  }
  &:active {
    transform: traslateY(3rem);
    filter: ${({ isPrimary, theme }) =>
      isPrimary ? "brightness(0.9)" : theme.colors.main};
  }
`;
