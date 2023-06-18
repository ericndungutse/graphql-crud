const {v4: uuid} = require("uuid")

exports.Mutation = {
  addCategory: (parent, args, context) => {
    const newCategory = {
      id: uuid(),
      name: args.input.name,
    };

    context.categories.push(newCategory);

    return newCategory;
  },
};