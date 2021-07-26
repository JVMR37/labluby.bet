import Layout from "./layout/Layout";
import NotFound from "./pages/NotFound";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/login"></Route>
        <Route path="/register"></Route>
        <Route path="/reset-password"></Route>
        <Route path="/order-now">
          <span>aloha</span>
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
