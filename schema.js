const { gql } = require("apollo-server");

// Define Type Definitions and resolvers
// TYPE/SCHEMA: Structure of data to be returned.
// RESOLVER/Handler queries the data.
// GQL to create type definitions

exports.typeDefs = gql`
  type Query {
    products(filter: ProductsFilter): [Product!]!
    product(id: ID!): Product
    categories: [Category!]!
    category(id: ID!): Category
  }

  type Mutation {
    addCategory(input: AddCategoryInput!): Category!
    addProduct(input: AddProductInput!): Product!
  }

  type Category {
    id: ID!
    name: String!
    products(filter: ProductsFilter): [Product!]!
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
    reviews: [Review]
  }

  type Review {
    id: ID!
    date: String!
    title: String!
    comment: String!
    rating: Int!
  }

  input ProductsFilter {
    onSale: Boolean
    avgRating: Int
  }

  input AddCategoryInput {
    name: String!
  }

  input AddProductInput {
    name: String!
    description: String!
    price: Int!
    quantity: Int!
    image: String!
    categoryId: String!
  }
`;
