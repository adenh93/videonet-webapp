import ApolloBoost from "apollo-boost";

const server = new ApolloBoost({
  uri:
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_PROD_API_URL
      : process.env.REACT_APP_API_URL,
});

export default server;
