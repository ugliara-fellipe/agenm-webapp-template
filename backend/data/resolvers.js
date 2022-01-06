const { Product, Store } = require("../db/dbConnector.js");

const resolvers = {
  Query: {
    getAllProduct: (root) => {
      return new Promise((resolve, reject) => {
        Product.find((err, product) => {
          if (err) {
            reject(err);
          } else {
            resolve(product);
          }
        });
      });
    },
    findStore: (root, { name }) => {
      return new Promise((resolve, reject) => {
        Store.findOne({ name: name })
          .populate("products")
          .exec((err, store) => {
            if (err) {
              reject(err);
            } else {
              resolve(store);
            }
          });
      });
    },
  },
  Mutation: {
    createProduct: (root, { product }) => {
      const newProduct = new Product({
        name: product.name,
        value: product.value,
      });

      return new Promise((resolve, reject) => {
        newProduct.save((err) => {
          if (err) {
            reject(err);
          } else {
            resolve(newProduct);
          }
        });
      });
    },
    createStore: (root, { store }) => {
      return new Promise((resolve, reject) => {
        Product.find(
          {
            _id: { $in: store.products },
          },
          function (err, products) {
            const newStore = new Store({
              name: store.name,
              products: products,
            });

            newStore.save((err) => {
              if (err) {
                reject(err);
              } else {
                resolve(newStore);
              }
            });
          }
        );
      });
    },
  },
};

module.exports = resolvers;
