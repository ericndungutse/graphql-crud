const { products } = require("../db");

exports.Category = {
  products: (parent, args, context) => {
    const categoryProducts = products.filter(
      (prod) => prod.categoryId === parent.id
    );
    return categoryProducts;
  },
};
