const mongoose = require("mongoose");
const { environment } = require("../config/config");
const { productSchema } = require("./schema/productSchema.js");
const { storeSchema } = require("./schema/storeSchema.js");
const env = process.env.NODE_ENV || "development";

mongoose.connect(environment[env].dbString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let db = mongoose.connection;
db.on("error", () => {
  console.error("Error while connecting to MongoDB");
});

const Product = mongoose.model("Product", productSchema);
const Store = mongoose.model("Store", storeSchema);

module.exports = { Product, Store };
