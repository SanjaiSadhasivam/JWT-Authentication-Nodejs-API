const express = require("express");
const cors = require("cors");
const { login, userData } = require("../controllers/login");

const router = express.Router();

router.use(cors());

router.post("/login/user", login);

module.exports = router;
