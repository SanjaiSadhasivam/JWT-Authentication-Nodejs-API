const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema({
  image: [String],
});

const ImageUpload = mongoose.model("image", ImageSchema);

exports.ImageUpload = ImageUpload;
