const { categories, products } = require("../db");

exports.Query = {
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
};
