import ApolloBoost from "apollo-boost";

const server = new ApolloBoost({
  uri: process.env.API_URL
})

export default server;