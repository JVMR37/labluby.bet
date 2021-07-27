import ReactDOM from "react-dom";
import App from "./App";
import { store } from "./store";
import { Provider } from "react-redux";
import GlobalStyles from "./GlobalStyles";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { appTheme } from "./utils/appTheme";

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={appTheme}>
      <Router>
        <GlobalStyles />
        <App />
      </Router>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
