const { categories } = require("../db");

exports.Product = {
  // "CATEGORY" a map to categoy field in prodoct schema
  category: (parent, args, context) => {
    return categories.find((category) => category.id === parent.categoryId);
  },
};
