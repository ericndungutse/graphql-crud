const { ApolloServer, gql } = require("apollo-server");

const { typeDefs } = require("./schema");
const { Query } = require("./resolvers/query");
const { Category } = require("./resolvers/category");
const { Product } = require("./resolvers/product");
const { categories, products } = require("./db");


const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Product,
    Category,
  },
  context: {
    categories,
    products,
  },
});

server.listen().then(({ url }) => {
  console.log("Server is ready at " + url);
});
