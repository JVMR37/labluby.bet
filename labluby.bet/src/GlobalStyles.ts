import styled, { createGlobalStyle } from "styled-components";
import { highlightAnimation } from "./styles/animatedDiv.style";

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
  max-width: 100rem;
}

.fade-enter{
   opacity: 0;
}
.fade-exit{
   opacity: 1;
}
.fade-enter-active{
   opacity: 1;
}
.fade-exit-active{
   opacity: 0;
}
.fade-enter-active,
.fade-exit-active{
   transition: opacity 500ms;
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

export const DivButton = styled.div`
  margin: 3rem 0rem;
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
  ${highlightAnimation}
  margin: 0;
  position: absolute;
  top: 45%;
  left: 50%;
  -ms-transform: translate(-45%, -45%);
  transform: translate(-50%, -50%);
`;

export const Column = styled.div<{
  margin?: string;
  width?: string;
}>`
  float: left;
  flex-direction: column;
  width: ${({ width }) => (width ? width : "50%")}; // 50%;
  margin: ${({ margin }) => (margin ? margin : "5rem")};

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
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

export const StyledInput = styled.input<{
  hasError?: boolean;
}>`
  font-size: 1.8rem;
  padding: 16px;
  margin-top: 10px;
  background: transparent;
  outline: none;

  width: 100%;
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: groove;

  border-bottom: 2px solid
    ${({ hasError, theme }) => (hasError ? theme.colors.error : "#ebebeb")};
  /* border-radius: 0px; */

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    border-bottom: 2px solid ${({ theme }) => theme.colors.main};
    -webkit-text-fill-color: ${({ theme }) => theme.colors.main};
    -webkit-box-shadow: 0 0 0 30px transparent
      /* ${({ theme }) => theme.colors.background} */ inset !important;
    transition: background-color 5000s ease-in-out 0s;
  }

  &:focus {
    border-bottom: 2px solid ${({ theme }) => theme.colors.focus} !important;
  }

  &::placeholder {
    color: #9d9d9d;
  }
`;

export const Button = styled.button<{
  bigRadius?: boolean;
  isPrimary?: boolean;
  big?: boolean;
  bigFont?: boolean;
}>`
  /* border-radius: ${({ bigRadius }) => (bigRadius ? "30px" : "20px")}; */
  border-radius: 50rem;
  background-color: ${({ isPrimary, theme }) =>
    isPrimary ? theme.colors.main : theme.colors.secondary};
  color: ${({ isPrimary, theme }) =>
    isPrimary ? theme.colors.background : theme.colors.main};
  padding: ${({ big }) => (big ? "15px 60px" : "13px 55px")};
  font-size: ${({ bigFont }) => (bigFont ? "22px" : "18px")};
  outline: none;
  cursor: pointer;
  border: 2px solid
    ${({ theme, isPrimary }) =>
      isPrimary ? theme.colors.main : theme.colors.secondary};
  transition: all 0.5s ease;

  & svg {
    margin-left: 5px;
    margin-right: 10px;
  }

  &:hover {
    filter: ${({ isPrimary }) => (isPrimary ? "brightness(0.9)" : "#b5c401")};
    background-color: ${({ isPrimary }) => !isPrimary && "#b5c401"};
    transform: translateY(-0.5rem) scale(1.02);
    font-weight: bold;
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
  isPrimary?: boolean;
  big?: boolean;
  bigFont?: boolean;
}>`
  /* ${({ bigRadius }) => (bigRadius ? "40px" : "30px")}; */
  border: 2px solid
    ${({ theme, isPrimary }) =>
      isPrimary ? theme.colors.main : theme.colors.secondary};
  border-radius: 50rem;
  color: ${({ theme, isPrimary }) =>
    isPrimary ? theme.colors.main : theme.colors.secondary};
  outline: none;
  padding: ${({ big }) => (big ? "15px 60px" : "13px 55px")};
  font-size: ${({ bigFont }) => (bigFont ? "22px" : "18px")};
  transition: all 0.2s ease;
  background-color: ${({ theme }) => theme.colors.background};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme, isPrimary }) =>
      isPrimary ? theme.colors.main : theme.colors.secondary};
    color: #fff;
    font-weight: bold;
    /* border: none; */
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

  /* margin: 03rem 0rem; */

  /* height: 100%; */
  width: 100%;
  outline: none;
  background-color: transparent;
  border: none;

  transition: all 0.5s ease;

  & svg {
    margin-left: 5px;
    margin-right: 5px;
  }

  &:disabled,
  &[disabled] {
    filter: brightness(0.6);
    /* transition: color 5s ease-in-out 0s; */
  }

  &:not(&[disabled]):hover {
    filter: ${({ isPrimary, theme }) =>
      isPrimary ? "brightness(0.9)" : theme.colors.main};
    color: ${({ isPrimary, theme }) => !isPrimary && theme.colors.main};
    transform: traslateY(-3rem);
    transform: scale(1.02);
  }
  &:active {
    transform: traslateY(3rem);
    filter: ${({ isPrimary, theme }) =>
      isPrimary ? "brightness(0.9)" : theme.colors.main};
  }
`;

export const IconButton = styled.button<{
  isDeleteButton?: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-weight: bold;
  color: ${({ isDeleteButton, theme }) =>
    isDeleteButton ? theme.colors.secondary : theme.colors.main};
  font-size: 2.5rem;
  font-family: Helvetica;
  cursor: pointer;
  display: block;

  /* margin: 03rem 0rem; */

  /* height: 100%; */
  /* width: 100%; */
  outline: none;
  background-color: transparent;
  border: none;

  transition: all 0.5s ease;

  & svg {
    margin-left: 5px;
    margin-right: 5px;
  }

  &:disabled,
  &[disabled] {
    filter: brightness(0.6);
    /* transition: color 5s ease-in-out 0s; */
  }

  &:not(&[disabled]):hover {
    filter: ${({ isDeleteButton, theme }) =>
      !isDeleteButton ? "brightness(0.9)" : theme.colors.main};
    color: ${({ isDeleteButton, theme }) =>
      isDeleteButton && theme.colors.error};
    transform: traslateY(-3rem);
    transform: scale(1.2);
  }
  &:active {
    transform: traslateY(3rem);
    filter: ${({ isDeleteButton, theme }) =>
      isDeleteButton ? "brightness(0.9)" : theme.colors.main};
  }
`;
