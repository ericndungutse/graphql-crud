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

  addProduct: (parent, args, context)=>{
    const newProduct = {
      id: uuid(),
      name:args.input.name,
      description:args.input.description,
      quantity:args.input.quantity,
      price: args.input.price,
      image: args.input.image,
      onSale: true,
      categoryId: args.input.categoryId,
    };

    context.products.push(newProduct);

    console.log(context.products[context.products.length - 1])
    return newProduct;
  }
};