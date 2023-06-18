const { ApolloServer, gql } = require("apollo-server");

const { typeDefs } = require("./schema");
const { Query } = require("./resolvers/query");
const { Category } = require("./resolvers/category");
const { Product } = require("./resolvers/product");
const { categories, products, reviews } = require("./db");
const {Mutation} = require("./resolvers/Mutations")


const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation,
    Product,
    Category,
  },
  context: {
    categories,
    products,
    reviews,
  },
});

server.listen().then(({ url }) => {
  console.log("Server is ready at " + url);
});
