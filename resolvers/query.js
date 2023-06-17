exports.Query = {
  products: (parent, args, context) => {
    const { filter } = args;
    const { products, reviews } = context;
    let filteredProducts = products;

    if (filter) {
      const { onSale, avgRating } = filter;
      if (onSale) {
       filteredProducts = products.filter(
          (product) => product.onSale
        )
      }

    
      if (avgRating && [1, 2, 3, 4, 5].includes(avgRating)) {
       filteredProducts = filteredProducts.filter((product) => {
          let sumRating = 0;
          let numOfReviews = 0

          reviews.forEach((review) => {
            if (review.productId === product.id) {
              sumRating += review.rating;
              numOfReviews +=1
            }
          });

          const avgProductRating = sumRating / numOfReviews;

          console.log(product.name, numOfReviews, sumRating, avgProductRating);

          return avgProductRating >= avgRating
        });
      }
    }

    return filteredProducts;
  },

  categories: () => {
    return context.categories;
  },

  category: (parent, args, context) => {
    const { categories } = context;
    const category = categories.find((category) => category.id === args.id);
    return category;
  },

  product: (parent, args, context) => {
    const { products } = context;
    const product = products.find((product) => product.id === args.id);
    return product;
  },
};
