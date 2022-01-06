/*
MIT License

Copyright (c) 2022 Fellipe Augusto Ugliara

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

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
