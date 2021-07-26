// import styled from "styled-components";

// const NavBar: React.FC = () => {
//   const Nav = styled.nav`
//     align-items: center;
//     justify-content: center;
//     display: flex;
//     width: 100%;
//     padding-top: 0.5rem;
//     border: 2px solid #ebebeb !important;
//   `;

//   const DivLogo = styled.div`
//     text-align: start;
//     font: italic normal bold 44px Helvetica;
//     letter-spacing: 0px;
//     color: #707070;
//     opacity: 1;
//   `;

//   const LogoLine = styled.div`
//     height: 6px;
//     width: 95px;
//     border-radius: 3px;
//     background-color: #b5c401;
//   `;

//   const NavContent = styled.div`
//     width: 720px;
//     align: center;
//   `;

//   return (
//     <Nav>
//       <NavContent>
//         <DivLogo>
//           <span>TGL</span>
//           <LogoLine></LogoLine>
//         </DivLogo>
//       </NavContent>
//     </Nav>
//   );
// };

// export default NavBar;

//In the Navbar.js file
import { MouseEventHandler, useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { Button } from "../GlobalStyles";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavLine,
  MenuIcon,
  Menu,
  MenuItem,
  MenuLink,
  MenuItemBtn,
  MenuLinkBtn,
} from "../styles/navbar.style";
const Navbar = () => {
  //click is the initial state and setclick will be the update state
  const [click, setClick] = useState(false);

  //Create a function to handle the click state of the menu icon.
  //if the menu icon was the menu bar at the beginning when clicked it will have the close icon
  const handleClick = () => setClick(!click);

  const closeMenu = (event: MouseEventHandler<HTMLAnchorElement>) => {
    // event.preventDefault();
  };
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <span>TGL</span>
          <NavLine />
        </NavLogo>
        <MenuIcon onClick={handleClick}>
          {click ? <BiX /> : <BiMenu />}
        </MenuIcon>

        <Menu onClick={handleClick} click={click}>
          <MenuItem>
            <MenuLink to="/">Home</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/about">About</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/recipe">Recipes</MenuLink>
          </MenuItem>
          <MenuItemBtn>
            {true ? (
              <MenuLinkBtn to="/order-now">
                <Button primary>Order Now</Button>
              </MenuLinkBtn>
            ) : (
              <MenuLinkBtn to="/order-now">
                <Button primary bigFont>
                  Order Now
                </Button>
              </MenuLinkBtn>
            )}
          </MenuItemBtn>
        </Menu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
