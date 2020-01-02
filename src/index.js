import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";

import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

// 2
const httpLink = createHttpLink({
  //uri: //process.env.REACT_APP_API_URL
  //uri: 'http://localhost:4000'
  uri: 'https://frozen-sierra-97329.herokuapp.com/'
  //uri: 'https://eu1.prisma.sh/fastpenguin91-c6edf8/color-swatches-server/dev'
  //'https://sleepy-dusk-27683.herokuapp.com/'
//  uri: 'https://us1.prisma.sh/fastpenguin91-c6edf8/finaltest/dev'
});


// 3
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

// 4
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
