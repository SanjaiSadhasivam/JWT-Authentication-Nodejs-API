const UserService = require("../services/signup");

exports.createUser = async (req, res) => {
  try {
    const userData = req.body;
    const user = await UserService.createUser(userData);
    res.status(200).json({ status: 200, data: user, message: "Successfully" });
  } catch (error) {
    console.log(error);
  }
};
