import Layout from "./layout/Layout";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ResetPass from "./pages/ResetPass";
import Home from "./pages/Home";
import NewBet from "./pages/NewBet";
import Account from "./pages/Account";
import { Switch, Route, Redirect } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "./hooks/hooks";
import { useMountEffect } from "./hooks/use-mount-effect";
import { selectIsLoggedInValue, loadAuthState } from "./store/authSlice";

function App() {
  const dispatch = useAppDispatch();

  useMountEffect(() => {
    dispatch(loadAuthState());
  });

  const isLoggedIn = useAppSelector(selectIsLoggedInValue);

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          {isLoggedIn && <Redirect to="/home"></Redirect>}
          {!isLoggedIn && <Redirect to="/login"></Redirect>}
        </Route>

        <Route path="/home">
          {isLoggedIn && <Home />}
          {!isLoggedIn && <Redirect to="/login"></Redirect>}
        </Route>

        <Route path="/account">
          {isLoggedIn && <Account />}
          {!isLoggedIn && <Redirect to="/login"></Redirect>}
        </Route>

        <Route path="/new-bet">
          {isLoggedIn && <NewBet />}
          {!isLoggedIn && <Redirect to="/login"></Redirect>}
        </Route>

        <Route path="/login">
          {isLoggedIn && <Redirect to="/home"></Redirect>}
          <Login />
        </Route>
        <Route path="/register" exact>
          <Register />
        </Route>
        <Route path="/reset-password">
          <ResetPass />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
