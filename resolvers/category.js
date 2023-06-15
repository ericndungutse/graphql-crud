exports.Category = {
  products: (parent, args, context) => {
    const { products } = context;
    const categoryProducts = products.filter(
      (prod) => prod.categoryId === parent.id
    );
    return categoryProducts;
  },
};
