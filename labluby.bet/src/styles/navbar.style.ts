import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container } from "../GlobalStyles";

export const Nav = styled.nav`
  font-size: 18px;
  position: sticky;
  top: 0;
  z-index: 999;
  height: 70px;
  background-color: ${({ theme }) => theme.colors.background};
  padding-bottom: 0px;
  /* box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.5); */
  /* box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15); */
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #ebebeb !important;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  ${Container};
`;

export const NavLogo = styled(Link)`
  color: #fff;
  cursor: pointer;
  display: block;
  align-items: center;
  text-decoration: none;
  font-weight: 800;
  transition: all 0.5s ease;

  text-align: start;
  font: italic normal bold 4rem Helvetica;
  letter-spacing: 0px;
  color: ${({ theme }) => theme.colors.secondary};
  opacity: 1;

  /* border-bottom: 2px solid #b5c401; */
  &:hover {
    transform: scale(1.08);
  }
`;

export const NavLine = styled.div`
  /* margin-right: 0.8rem; */
  transition: all 0.5s ease;

  height: 6px;
  width: 8rem;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.colors.main};

  &:hover {
    transform: scale(1.08);
  }
`;

export const MenuIcon = styled.div`
  display: none;

  @media (max-width: 1000px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 20%);
    font-size: 4rem;
    cursor: pointer;
  }
`;

export const Menu = styled.ul<{
  click: boolean;
}>`
  display: flex;
  align-items: center;
  text-align: center;

  @media only screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? "0" : "-100%")};
    background-color: ${({ theme }) => theme.colors.background};
    transition: all 0.5s ease;
  }
`;

export const MenuItem = styled.li`
  list-style: none;
  height: 80px;

  @media only screen and (max-width: 1000px) {
    width: 100%;
    &:hover {
      border: none;
    }
  }
`;

export const MenuLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  height: 100%;
  transition: all 0.2s ease;

  & svg {
    margin-left: 5px;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.main};
    transform: traslateY(-3rem);
  }
  &:active {
    transform: traslateY(3rem);
    color: ${({ theme }) => theme.colors.main};
  }

  @media only screen and (max-width: 1000px) {
    display: block;
    padding: 3rem;
    text-align: center;
    transition: all 0.2s ease;
  }
`;

export const MenuItemBtn = styled.li`
  list-style: none;
  @media screen and (max-width: 1000px) {
    display: block;
    text-align: center;
    transition: all 0.2s ease;
    width: 100%;
  }
`;

export const MenuLinkBtn = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 8px 16px; */
  height: 100%;
  width: 100%;
  border: none;
  outline: none;

  & button {
    text-decoration: none;
    font-weight: bold;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.secondary};
    outline: none;
    background-color: transparent;
    border: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    height: 100%;
    transition: all 0.2s ease;

    & svg {
      margin-left: 5px;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.error};
      transform: traslateY(-3rem);
    }
    &:active {
      transform: traslateY(3rem);
      color: ${({ theme }) => theme.colors.error};
    }

    @media only screen and (max-width: 1000px) {
      display: block;
      padding: 3rem;
      text-align: center;
      transition: all 0.2s ease;

      &:hover {
        color: ${({ theme }) => theme.colors.error};
        transform: traslateY(-3rem);
      }
      &:active {
        transform: traslateY(3rem);
        color: ${({ theme }) => theme.colors.error};
      }

      & svg {
        display: none;
      }
    }
  }
`;
