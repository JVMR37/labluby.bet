import React, { Fragment } from "react";
import { useAppSelector } from "../hooks/hooks";
import { selectIsLoggedInValue } from "../store/authSlice";

import NavBar from "./NavBar";

const Layout: React.FC = (props) => {
  const isLoggedIn = useAppSelector(selectIsLoggedInValue);

  return (
    <Fragment>
      {isLoggedIn && <NavBar />}
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
