const { ImageUpload } = require("../models/imageUpload");

exports.imageUpload = async (req, res) => {
  try {
    if (req.files) {
      const newImage = new ImageUpload({
        image: req.files.map((url) => url.path),
      });

      console.log(req.files);
      await newImage.save();
      res.status(200).json({
        status: "OK",
        message: "Image uploaded successfully",
      });
    }
  } catch (error) {
    res.status(500).send("file not upload");
  }
};

exports.imageData = async (req, res) => {
  try {
    const allImages = await ImageUpload.find({});
    const imageUrl = allImages.map((img) => ({
      ...img.toObject(),
      image: img.image.map((elem) => `http://localhost:5000/${elem}`),
    }));

    res.status(200).json({ status: "OK", data: imageUrl });
  } catch (error) {
    res.status(500).json({ status: "OK", message: "Pudungiruchu aunty!!!" });
  }
};
