const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
  id: Number,
  title: String,
  price: Number,
  description: String,
  category: String,
  image: [String],
});

const CartCount = mongoose.model("cart", CartSchema);
exports.CartCount = CartCount;
