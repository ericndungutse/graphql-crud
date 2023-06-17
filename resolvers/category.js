exports.Category = {
  products: (parent, args, context) => {
    const { products } = context;
    const {filter} = args

    const categoryProducts = products.filter(
      (prod) => prod.categoryId === parent.id
    );

    let filteredCategoryProducts = categoryProducts;

    if (filter) 
      if (filter.onSale)
        return (filteredCategoryProducts = categoryProducts.filter(
          (product) => product.onSale
        ));
      else
        return (filteredCategoryProducts = categoryProducts.filter(
          (product) => !product.onSale
        ));

    return filteredCategoryProducts;
  },
};
