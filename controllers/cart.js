const { CartCount } = require("../models/cart");

exports.addCart = async (req, res) => {
  try {
    const result = await CartCount.create(req.body);
    res.status(200).json({ status: "ok", data: result });
  } catch (error) {
    console.log(error);
  }
};
