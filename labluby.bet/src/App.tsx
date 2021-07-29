import Layout from "./layout/Layout";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ResetPass from "./pages/ResetPass";
import Home from "./pages/Home";
import NewBet from "./pages/NewBet";
import Account from "./pages/Account";
import { Switch, Route, Redirect } from "react-router-dom";
import { useAppSelector } from "./hooks/hooks";
import { selectIsLoggedInValue } from "./store/authSlice";

function App() {
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
