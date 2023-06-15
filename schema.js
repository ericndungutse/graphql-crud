const { gql } = require("apollo-server");

// Define Type Definitions and resolvers
// TYPE/SCHEMA: Structure of data to be returned.
// RESOLVER/Handler queries the data.
// GQL to create type definitions

exports.typeDefs = gql`
  type Query {
    products: [Product!]!
    product(id: ID!): Product
    categories: [Category!]!
    category(id: ID!): Category
  }

  type Category {
    id: ID!
    name: String!
    products: [Product!]!
  }

  type Product {
    id: ID!
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    onSale: Boolean!
    image: String!
    category: Category!
  }
`;
