import "dotenv/config";
import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import client from "./apolloClient";
import theme from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
