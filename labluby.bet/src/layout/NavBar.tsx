import { MouseEventHandler, useState } from "react";
import { FaBars, FaTimes, FaArrowRight } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavLine,
  MenuIcon,
  Menu,
  MenuItem,
  MenuLink,
  MenuLinkBtn,
  MenuItemBtn,
} from "../styles/navbar.style";
const Navbar = () => {
  //click is the initial state and setclick will be the update state
  const [click, setClick] = useState(false);

  //Create a function to handle the click state of the menu icon.
  //if the menu icon was the menu bar at the beginning when clicked it will have the close icon
  const handleClick = () => setClick(!click);

  const closeMenu = (event: any) => {
    // event.preventDefault();
    console.log("aloha");
  };
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <span>TGL</span>
          <NavLine />
        </NavLogo>
        <MenuIcon onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </MenuIcon>

        <Menu onClick={handleClick} click={click}>
          <MenuItem>
            <MenuLink to="/">Home</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/account">Account</MenuLink>
          </MenuItem>

          <MenuItemBtn>
            <MenuLinkBtn to="/login">
              <button onClick={closeMenu}>
                <span>Logout</span>
                <FaArrowRight />
              </button>
            </MenuLinkBtn>
          </MenuItemBtn>

          {/* <MenuItemBtn>
            {true ? (
              <MenuLinkBtn to="/order-now">
                <OutlineButton>
                  <span>Logout</span>
                  <FaArrowRight />
                </OutlineButton>
              </MenuLinkBtn>
            ) : (
              <MenuLinkBtn to="/order-now">
                <OutlineButton primary bigFont>
                  Order Now
                </OutlineButton>
              </MenuLinkBtn>
            )}
          </MenuItemBtn> */}
        </Menu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
