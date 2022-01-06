const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const resolvers = require("../data/resolvers.js");
const typeDefs = require("../data/schema.js");
const { PORT } = require("../config/config");

const server = new ApolloServer({ typeDefs, resolvers });
const app = express();
server.start().then(() => {
  server.applyMiddleware({ app });

  app.get("/", (req, res) => {
    console.log("Apollo GraphQL Express server is ready");
  });

  app.listen({ port: PORT }, () => {
    console.log(
      `Server is running at http://localhost:8080${server.graphqlPath}`
    );
  });
});