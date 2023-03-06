const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const typeDefs = require("./schema");
const resolvers = require("./resolvers.js");
const app = express();

async function startApolloServer() {
  const app = express();

  app.get("/api/data/:id", (req, res) => { 
    const data = { users: resolvers.Query.users };
    res.send(data);
  });
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app });

  await new Promise((resolve) => app.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

startApolloServer();
