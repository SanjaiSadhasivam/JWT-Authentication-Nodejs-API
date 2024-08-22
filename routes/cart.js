const express = require("express");
const { addCart } = require("../controllers/cart");

const router = express.Router();

router.post("/cart/add", addCart);

module.exports = router;
