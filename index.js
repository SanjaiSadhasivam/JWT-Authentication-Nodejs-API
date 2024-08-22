const express = require("express");
const mongoose = require("./config/dbConfig"); // Include the dbConfig.js file using require
const bodyParser = require("body-parser");
const signupRoute = require("./routes/signup");
const loginRoute = require("./routes/login");
const userRoute = require("./routes/user");
const cartRoute = require("./routes/cart");
const path = require("path");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use("/user", signupRoute);
app.use("/auth", loginRoute);
app.use("/api", userRoute);
app.use("/api", cartRoute);

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.listen(PORT, () => {
  console.log(`Server connected successfully on ${PORT}`);
});
