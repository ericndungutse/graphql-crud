const {ApolloServer, gql} = require("apollo-server")
const {db: {products}} = require("./db")

// Define Type Definitions and resolvers
// TYPE/SCHEMA: Structure of data to be returned.
// RESOLVER/Handler queries the data.
// GQL to create type definitions



// QUERY TYPE: What will we be able to return
const typeDefs = gql`
  type Query {
    hello: String
    products: [Product!]!
    product(id: ID!): Product
  }
  type Product {
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    onSale: Boolean!
    image:String!
  }
`;

const resolvers = {
  Query: {
    hello: () => "Hello world!",
    products: () => products,
    product: (parent, args, context) =>{
      const product = products.find((product) => product.id === args.id);
      return product;
    }
  },
};
const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(({url})=>{
    console.log("Server is ready at " + url)
})