const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://sanjaisnj97:Sanjai1997@cluster0.ejpdbfe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then((res) => {
    console.log("DB COnnected");
  })
  .catch((e) => {
    console.log(e);
  });

module.exports = mongoose;
