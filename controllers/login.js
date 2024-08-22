const jwt = require("jsonwebtoken");
const secretKey = "hgdhet4546587698djrhegrx4232y54s3y6xG##@$^^U^";
const bcrypt = require("bcrypt");
const { User } = require("../models/user");

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      res.status(500).json({ status: 500, message: "Boss apdi oru aale illa" });
    }
    const passwordValid = await bcrypt.compare(password, user.password);
    if (!passwordValid) {
      return res
        .status(401)
        .json({ status: 401, message: "Correct ah type pannu man!!" });
    }

    const token = jwt.sign({ userData: user }, secretKey, {
      expiresIn: "24h",
    });

    res.json({ token: token });
  } catch (error) {
    res.status(500).json({ status: 500, message: "Pudungiruchu aunty!!" });
  }
};
exports.userData = async (req, res) => {
  try {
    const token = req.headers.authorization?.replace("Bearer ", "");
    const tokenData = jwt.verify(token, secretKey);
    // const users = await User.find({});
    if (!tokenData) {
      return res
        .status(500)
        .json({ status: 500, message: "Token: kadalaye illa" });
    }

    res.status(200).json({
      status: "Jeichutom maara!!!",
      // data: users,
      data: tokenData.userData,
      token: token,
    });
  } catch (error) {
    res
      .status(500)
      .json({ status: 500, message: "User data Pudungiruchu aunty!!" });
  }
};
