const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Users {
    id: ID!
    name: String!
    lastName: String!
    title: String!
    image: String!
    score: Int!
    email: String!
    phone: String!
  }

  type Query {
    users: [Users]
    user(id: ID): Users
  }
`;
module.exports = typeDefs;
