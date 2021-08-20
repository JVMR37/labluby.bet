import { useState } from "react";
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

import { useAppDispatch } from "../hooks/hooks";
import { useMountEffect } from "../hooks/use-mount-effect";
import { logout } from "../store/authSlice";
import { loadGames } from "../store/gamesSlice";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const dispatch = useAppDispatch();

  const handleClick = () => setClick(!click);

  useMountEffect(() => {
    dispatch(loadGames());
  });

  // const closeMenu = (event: any) => {
  //   event.preventDefault();
  //   console.log("aloha");
  // };

  const logoutButtonHandler = (event: any) => {
    event.preventDefault();

    dispatch(logout());
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
            <MenuLink to="/home">Home</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/account">Account</MenuLink>
          </MenuItem>

          <MenuItemBtn>
            <MenuLinkBtn to="/login">
              <button onClick={logoutButtonHandler}>
                <span>Logout</span>
                <FaArrowRight />
              </button>
            </MenuLinkBtn>
          </MenuItemBtn>
        </Menu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
