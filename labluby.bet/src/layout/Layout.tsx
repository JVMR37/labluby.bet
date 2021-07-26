import React, { Fragment } from "react";
import { useAppSelector } from "../hooks/hooks";
import { selectIsLoggedInValue } from "../store/authSlice";
import Footer from "./Footer";

import NavBar from "./NavBar";

const Layout: React.FC = (props) => {
  const isLoggedIn = useAppSelector(selectIsLoggedInValue);

  return (
    <Fragment>
      {isLoggedIn && <NavBar />}
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
