import ApolloBoost from "apollo-boost";

const server = new ApolloBoost({
  uri: process.env.REACT_APP_API_URL,
});

export default server;
