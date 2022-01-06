const mongoose = require("mongoose");

const storeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

storeSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

storeSchema.set("toJSON", {
  virtuals: true,
});

module.exports = { storeSchema };
