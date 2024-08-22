const mongoose = require("../config/dbConfig");

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  role: { type: String, enum: ["admin", "customer"], default: "customer" },
});

module.exports = mongoose.model("User", userSchema);
