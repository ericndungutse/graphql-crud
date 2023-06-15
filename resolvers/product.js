exports.Product = {
  // "CATEGORY" a map to categoy field in prodoct schema
  category: (parent, args, context) => {
    const { categories } = context;
    return categories.find((category) => category.id === parent.categoryId);
  },
};
