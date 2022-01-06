const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Product {
    id: ID
    name: String
    value: Int
  }

  type Store {
    id: ID
    name: String
    products: [Product]
  }

  input ProductInput {
    name: String
    value: Int
  }

  input StoreInput {
    name: String
    products: [String]
  }

  type Query {
    getAllProduct: [Product]
    findStore(name: String): Store
  }

  type Mutation {
    createProduct(product: ProductInput): Product
    createStore(store: StoreInput): Store
  }
`;

module.exports = typeDefs;
