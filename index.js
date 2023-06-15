const {ApolloServer, gql} = require("apollo-server")
const {db: {products, categories}} = require("./db")

// Define Type Definitions and resolvers
// TYPE/SCHEMA: Structure of data to be returned.
// RESOLVER/Handler queries the data.
// GQL to create type definitions



// QUERY TYPE: What will we be able to return
const typeDefs = gql`
  type Query {
    products: [Product!]!
    product(id: ID!): Product
    categories: [Category!]!
    category(id: ID!): Category
  }

  type Category {
    id:ID!
    name: String!
    products: [Product!]!
  }

  type Product {
    id:ID!
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    onSale: Boolean!
    image:String!
    category: Category!
  }
`;

const resolvers = {
  Query: {
    products: () => products,
    categories: () => categories,
    category: (parent, args, context) => {
      const category = categories.find((category) => category.id === args.id);
      return category;
    },
    product: (parent, args, context) => {
      const product = products.find((product) => product.id === args.id);
      return product;
    },
  },

  // Link Resolver fro Categories
  Category: {
    products: (parent, args, context) => {
      const categoryProducts = products.filter(
        (prod) => prod.categoryId === parent.id
      );
      return categoryProducts;
    },
  },

  // Link Resolver fro Products
  Product: {
    // "CATEGORY" a map to categoy field in prodoct schema
    category: (parent, args, context) => {
      console.log(parent)
      return categories.find((category) => category.id === parent.categoryId);
    },
  },
};
const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(({url})=>{
    console.log("Server is ready at " + url)
})